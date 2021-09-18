import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
 
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { Room } from '../../shared/Model/Room';
import { AuthentificationService } from '../../shared/Service/authentification.service';
@Component({
  selector: 'app-listroommdiscussion',
  templateUrl: './listroommdiscussion.component.html',
  styleUrls: ['./listroommdiscussion.component.css']
})
export class ListroommdiscussionComponent implements OnInit {
  Nom!:string;

  Employes: Room[]=[];
  id:any;
  id2:any;
  constructor(private service:AuthentificationService ,private modalService: NgbModal, private ngxService: NgxUiLoaderService,private toestar:ToastrService, private router: Router,private route: ActivatedRoute) {

  }
 errorMessage = '';

 profileForm!: FormGroup;
  ngOnInit(): void {

    this.id=localStorage.getItem("user_id");

    this.service.getbyidadin(this.id).subscribe(
      etudiant=>{
        this.Employes=etudiant;
 
      },
      err=>{
this.errorMessage=err;
      }
    )



    this.profileForm = new FormGroup({
      'Name': new FormControl('',Validators.required),
      'Emailuser': new FormControl(null,[Validators.required,Validators.email]),
      'Emailemployer': new FormControl(null,[Validators.required,Validators.email])
       
     
     })


  }
  openModalDelet(Delete: any,emp: any) {
    this.modalService.open(Delete, {
     centered: true,
     backdrop: 'static'
     
    });
    this.id2=emp.id;
   }
  
   
   openModal(targetModal:any,Etud:any) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
     
    });
   
    this.id2=Etud.id;
    this.profileForm.patchValue({

      'Name':  Etud.name, 
      'Emailuser':Etud.emailuser,
      'Emailemployer':Etud.emailemployer,
     });
  
  
   }
  
  
  
  Serch()
  {
    if(this.Nom!="")
    {
    this.Employes=this.Employes.filter(res=>  {
  return res.name?.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());});
    }
    else if(this.Nom=="")
    {
      this.ngOnInit();
    }
  
  
  
  }
  onSubmit()
  {  this.ngxService.start(); 
    this.service.updateroom(this.profileForm.value.Name,this.profileForm.value.Emailuser,this.profileForm.value.Emailemployer,this.id2).subscribe(
  
  data=>{
  this.ngxService.stop(); 
  this.modalService.dismissAll();
  this.toestar.success("Update Succefule");
  
  this.ngOnInit();
  },
  err=>
  {
  this.ngxService.stop(); 
  this.toestar.error("Erreur");
  this.errorMessage = err.error.message;
  
  }
  
    )
  
  }
  Deletee():void
  {
   this.ngxService.start(); 
  
    this.service.deleteroomdis(this.id2).subscribe(
      data => {
       this.ngxService.stop(); 
       this.modalService.dismissAll();
       this.toestar.success("Delete Succefule");
  
        this.ngOnInit();
       
  
  
      },
      err => {
       this.ngxService.stop(); 
        this.toestar.error("Erreur");
        this.errorMessage = err.error.message;
      }
    );
  
  
  
  }
  }
  



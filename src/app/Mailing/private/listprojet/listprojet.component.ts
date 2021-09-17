import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Projet } from '../../shared/Model/Projet';
import { AuthentificationService } from '../../shared/Service/authentification.service';

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent implements OnInit {
  errorMessage = '';
  Nom!:string;
id:any;
id2:any;
 

Employes: Projet[]=[];
  profileForm!: FormGroup;
  constructor(private service:AuthentificationService,private modalService: NgbModal, private toestar:ToastrService,private ngxService: NgxUiLoaderService ) { }

  ngOnInit(): void {
    this.id=localStorage.getItem("user_id");


    this.service.getprojetbyidadmin(this.id).subscribe(
      etudiant=>{
        this.Employes=etudiant;
 
      },
      err=>{
this.errorMessage=err;
      }
    )
 
  this.profileForm = new FormGroup({
    'Name': new FormControl('',Validators.required),
    'Description': new FormControl(null,[Validators.required]),
    'Email': new FormControl(null,[Validators.required,Validators.email])})

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
    'Email':Etud.email,
    'Description':Etud.description,
    
    
    
  
  
  
  
   });


 }



Serch()
{
  if(this.Nom!="")
  {
  this.Employes=this.Employes.filter(res=>  {
return res.name.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());});
  }
  else if(this.Nom=="")
  {
    this.ngOnInit();
  }



}
onSubmit()
{  this.ngxService.start(); 
  this.service.updateprojet(this.profileForm.value.Name,this.profileForm.value.Email,this.profileForm.value.Description,this.id2).subscribe(

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

  this.service.deleteprojet(this.id2).subscribe(
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

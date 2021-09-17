import { Component, OnInit } from '@angular/core';
 
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../../shared/Service/authentification.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { User } from '../../shared/Model/User';
import { BehaviorSubject } from 'rxjs';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  Employes: User[]=[];
  Nom!: string;
  constructor(private modalService: NgbModal, private toestar:ToastrService,private ngxService: NgxUiLoaderService, private router: Router,private ser:AuthentificationService,private route: ActivatedRoute) { }
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 

  errorMessage = '';
 id:any;
 idup:any;
  profileForm!: FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'Name': new FormControl('',Validators.required),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Phone': new FormControl(null,[Validators.required,Validators.pattern(this.mobnumPattern)]),
      'roles': new FormControl('',Validators.required)
    });





    this.ser.getAllUser("Client").subscribe(
      etudiant => {
        this.Employes = etudiant;
        console.log(this.Employes)
      },
      err => {
        this.Employes = JSON.parse(err.error).message;
      }
    );
  }
  openModalDelet(Delete: any,emp: any) {
    this.modalService.open(Delete, {
     centered: true,
     backdrop: 'static'
     
    });
    this.id=emp.id;
   }

   Deletee():void
   {
    this.ngxService.start(); 
 
     this.ser.deleteuser(this.id).subscribe(
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
   onSubmit()
   {  this.ngxService.start(); 
     this.ser.udateAdmin(this.profileForm.value.Name,this.profileForm.value.Email,this.profileForm.value.Phone,this.idup,this.profileForm.value.roles).subscribe(

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
   Serch()
   {
     if(this.Nom!="")
     {
     this.Employes=this.Employes.filter(res=>  {
return res.username.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());});
     }
     else if(this.Nom=="")
     {
       this.ngOnInit();
     }



   }
   openModal(targetModal:any,Etud:any) {
    this.modalService.open(targetModal, {
     centered: true,
     backdrop: 'static'
     
    });
   
    this.idup=Etud.id;
    this.profileForm.patchValue({
      'Name':  Etud.username, 
      'Email':Etud.email,
      'Phone':Etud.numero,
      
      'roles':Etud.roles,
      
    
    
    
    
     });
 
 
   }
}

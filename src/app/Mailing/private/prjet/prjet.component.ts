import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
 
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { AuthentificationService } from '../../shared/Service/authentification.service';
@Component({
  selector: 'app-prjet',
  templateUrl: './prjet.component.html',
  styleUrls: ['./prjet.component.css']
})
export class PrjetComponent implements OnInit {

  id:any;
  constructor(private service:AuthentificationService ,private ngxService: NgxUiLoaderService,private toestar:ToastrService, private router: Router,private route: ActivatedRoute) {

  }
 errorMessage = '';

 profileForm!: FormGroup;
 ngOnInit(): void {

   var that = this;
   that.ngxService.start()

   setTimeout(function(){

     that.ngxService.stop()
     
   }, 500);
   
   this.profileForm = new FormGroup({
     'Name': new FormControl('',Validators.required),
     'Description': new FormControl(null,[Validators.required]),
     'Email': new FormControl(null,[Validators.required,Validators.email])})
   }
   onSubmit()
   {this.ngxService.start(); 
     this.id=localStorage.getItem("user_id");
this.service.saveprojet(this.profileForm.value.Name,this.profileForm.value.Email,this.id,this.profileForm.value.Description).subscribe
(
data=>{
  this.ngxService.stop();  
        this.toestar.success("Projet Add");
        this.router.navigate(['/dashbored/listprojet'], {relativeTo: this.route});
},
err=>
{
  this.ngxService.start(); 
  this.errorMessage = err.error.message;
  this.toestar.error(this.errorMessage);
}

)
   }
  }
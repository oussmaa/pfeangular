import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
 
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { AuthentificationService } from '../../shared/Service/authentification.service';
@Component({
  selector: 'app-gerer-disucsion',
  templateUrl: './gerer-disucsion.component.html',
  styleUrls: ['./gerer-disucsion.component.css']
})
export class GererDisucsionComponent implements OnInit {

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
     'Emailuser': new FormControl(null,[Validators.required,Validators.email]),
     'Emailemployer': new FormControl(null,[Validators.required,Validators.email])
    
    
    })
     
   }
   onSubmit()

   {
    var that = this;
    that.ngxService.start()
    
    this.id=localStorage.getItem("user_id");

this.service.saverommm(this.profileForm.value.Name,this.profileForm.value.Emailuser,this.profileForm.value.Emailemployer,this.id).subscribe
(
  data=>{

    this.toestar.success("Add Succéfule");
    that.ngxService.stop()
    this.ngOnInit();
  }
  
  ,err=>{

    this.toestar.error("Ty Later");

    that.ngxService.stop()
  }
)
   }
  }
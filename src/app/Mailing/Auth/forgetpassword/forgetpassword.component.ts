import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../../shared/Service/authentification.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private toaster:ToastrService,private router: Router,private ngxService: NgxUiLoaderService,private route: ActivatedRoute,private service:AuthentificationService) { }
  profileForm!: FormGroup;

  ngOnInit(): void {

    this.profileForm = new FormGroup({
       'Email': new FormControl(null,[Validators.required,Validators.email]),
    
    
    });
  }
  onSubmit()
  {this.ngxService.start(); 
 this.service.forgetpassword(this.profileForm.value.Email).subscribe(

  data=>{
    this.ngxService.stop();  
    this.ngOnInit();
 this.toaster.success("Email Verified") ;     },
  err=>{
    this.ngxService.stop();  
   }
)
  }
}
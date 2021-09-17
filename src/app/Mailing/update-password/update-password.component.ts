import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from '../shared/Service/authentification.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {
id:any
profileForm!: FormGroup;
pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  constructor(private ngxService: NgxUiLoaderService,private router: Router,private toaster:ToastrService,private route: ActivatedRoute,private service:AuthentificationService) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params.id;
    this.profileForm = new FormGroup({
    
       'password': new FormControl(null,[Validators.required,Validators.pattern(this.pwdPattern)]),
   
    });
    
  }
  
  onSubmit()
  {
    this.ngxService.start(); 
 this.service.updatepassword(this.id,this.profileForm.value.password).subscribe(

  data=>{
    this.ngxService.stop();  
    this.router.navigate(['/'], {relativeTo: this.route});
    this.toaster.success("Password Update") ;     },
  err=>{
    this.ngxService.stop();  
    this.toaster.error("Password Non Update") ;     

   }
)
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 import { ToastrService } from 'ngx-toastr';
import { AuthentificationService } from 'src/app/Mailing/shared/Service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage = '';

  errorMessage2 = '';
  isLoginError = false;

  profileForm!: FormGroup;
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 
  constructor(private ser: AuthentificationService,
   
    private router: Router, private route: ActivatedRoute,private toastr: ToastrService ) { 
    } 
  ngOnInit(): void {

    this.profileForm = new FormGroup({
       'Email': new FormControl(null,[Validators.required,Validators.email]),
    
        'password': new FormControl(null,[Validators.required,Validators.required]),
   
    });
    this.isLoginError = false;

  }
  onSubmit()
  {
 
    this.ser.login(this.profileForm.value.Email,this.profileForm.value.password).subscribe(
      
      res =>{
        if(res.verife==true)
        {
      this.ser.saveToken(res.accessToken);
     localStorage.setItem('user_id',res.id);
      const role =  res.roles;

      if (role === 'Client') {
        this.router.navigate(['/dashbored'], {relativeTo: this.route});
        this.ser.isLoginClient=true;

      } else if (role === 'Admin') {
        this.router.navigate(['/dashboard']);
        this.ser.isLoginAdmin=true;

      } else if (role === 'Employer') {
        this.router.navigate(['/dashbored']);
        this.ser.isLoginEmployer=true;

      }
      else if (role === 'SupperAdmin') {
        this.router.navigate(['/dashbored']);
        this.ser.isLoginSupperAdmin=true;

      }
      this.toastr.success("Welcom");
    }
    else{
      this.toastr.error("Please Verifier your Email");

    }
      },err=>   
           { this.errorMessage = err.error.message;
          this.errorMessage2="Please Verifier Password or Email";
          this.toastr.error( this.errorMessage2);
          this.isLoginError = true;

          
          
          
          }
           );
  }
}

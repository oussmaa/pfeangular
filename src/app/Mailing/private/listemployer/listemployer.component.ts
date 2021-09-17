import { AfterViewInit, Component, OnInit } from '@angular/core';
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
  selector: 'app-listemployer',
  templateUrl: './listemployer.component.html',
  styleUrls: ['./listemployer.component.css']
})
export class ListemployerComponent implements OnInit  {
  Employes: User[]=[];
  Nom!: string;
  constructor(private modalService: NgbModal, private toestar:ToastrService,private ngxService: NgxUiLoaderService, private router: Router,private ser:AuthentificationService,private route: ActivatedRoute) { }
  pwdPattern = "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}";
  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 

  errorMessage = '';
 id:any;
  profileForm!: FormGroup;
  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'Name': new FormControl('',Validators.required),
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Phone': new FormControl(null,[Validators.required,Validators.pattern(this.mobnumPattern)]),
      'password': new FormControl(null,[Validators.required,Validators.pattern(this.pwdPattern)]),
      'roles': new FormControl('',Validators.required)
    });




 
  }
 
  onSubmit()
  {   this.ngxService.start(); 
    this.ser.registerEmp(this.profileForm.value.Name, this.profileForm.value.Email, this.profileForm.value.password,this.profileForm.value.Phone,this.profileForm.value.roles).subscribe(
      data => {
     
      
          this.ngxService.stop();  
        this.toestar.success("Employes Add");
        this.router.navigate(['/dashbored/listemp'], {relativeTo: this.route});

 
       
      },
      err => {
        this.ngxService.stop();  
        this.errorMessage = err.error.message;
        this.toestar.error(this.errorMessage);

      }
    );
   }
   
   
}

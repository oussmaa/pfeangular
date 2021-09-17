import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public user!: User;
  username:any
  errorMessage = '';
  name!: string;  image:any;
  fileData!: File;
  previewUrl:any = null;
fffff:any;
  retrievedImage:any="http://localhost:8065/api/auth/showme/";
  profileForm!: FormGroup;
   mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 
  constructor(private httpClient: HttpClient,private ngxService: NgxUiLoaderService,private service:AuthentificationService,private toaster:ToastrService ) { 

    
  }
id:any;
  ngOnInit(): void {
    var that = this;
    that.ngxService.start()

    setTimeout(function(){

      that.ngxService.stop()
      
    }, 500);

    this.profileForm = new FormGroup({

      'Name': new FormControl('',Validators.required),
      'Email': new FormControl('',[Validators.required,Validators.email]),
      'Phone': new FormControl('',[Validators.required,Validators.pattern(this.mobnumPattern)]),
      
      'roles': new FormControl({value:'', disabled: true},Validators.required),
       'Adress': new FormControl(''),
       'City': new FormControl(''),
       'Countrie': new FormControl(''),
       'Postal': new FormControl(''),
    });

this.id=localStorage.getItem("user_id");

this.service.GetUserById(this.id).subscribe(

  data=>{
           this.user=data
this.image=this.user.image;
          if(this.user.image=="")
          {
            this.fffff="../../assets/img/profiled.jpg"; 
          }
          else{
            this.fffff=this.retrievedImage+this.user.image;
       

          }

   
         

            this.profileForm.patchValue({
              'Name': this.user.username, 
          
              'Email':this.user.email,
              'Phone':this.user.numero,
              'Adress':this.user.contact?.adreess,
              'City':this.user.contact?.city,
              'Countrie':this.user.contact?.countrie,
              'Postal':this.user.contact?.postalcode,
              'roles':this.user.roles,
              
            
            
            
            
             });

  },
  err=>{

  }
  
)



  }
  onSubmit()
  {

this.service.udateUser(this.profileForm.value.Name,this.profileForm.value.Email,
  this.profileForm.value.Phone,this.profileForm.value.Adress,this.profileForm.value.City,
  this.profileForm.value.Countrie,this.profileForm.value.Postal,this.id).subscribe
(
  data =>{
    this.ngOnInit();
this.toaster.success("Profile Update");
  },
  err=>{
    this.toaster.error("Erreur try later");

  }
)
  }





  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    
     const formdata=new FormData();
     formdata.append('file', this.fileData);
     this.httpClient.put("http://localhost:8065/api/auth/updateuser/"+this.id, formdata).subscribe(
      (res) => {
        this.toaster.success("Image Update");   
        this.ngOnInit();
   
      }
      ,
      (err) => {
        this.toaster.error(err);  
      }
    );
    this.preview();
     
}
preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
    this.profileForm.value.Image=this.previewUrl;
  }
}

}

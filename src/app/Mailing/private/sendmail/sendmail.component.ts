import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from 'src/app/socket.service';
import { Message } from '../../shared/Model/Message';
import { SendMailService } from '../../shared/Service/send-mail.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {
  public user!: User;
  emailad:Array<string> =[];
id:any;
emailtest!:string;
fileData!: File;
date=new Date();
  constructor(private service:AuthentificationService,private ngxService: NgxUiLoaderService,private socket:SocketService,private toestar:ToastrService, private router: Router,private ser:SendMailService,private route: ActivatedRoute) {

   }
   myDate = new Date();
  errorMessage = '';
email:any;
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
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Date': new FormControl(null,[Validators.required]),
      'Time': new FormControl(null,[Validators.required]),
      'Objet': new FormControl(null,[Validators.required]),
      'File': new FormControl(null),

    });
    this.id=localStorage.getItem("user_id");


  }
  
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    
   
     
}

 
close(msg:string) {
  const index: number = this.emailad.indexOf(msg);
  if (index !== -1) {
      this.emailad.splice(index, 1);
  }      
  console.log(this.emailad)  
}
AddmailList(emaila:string)
{

this.emailad.push(emaila)
console.log(this.emailad)
  this.emailtest=emaila;

}


  onSubmit()



  {  if(this.emailad.length==null)
    {
      console.log("hahaahah");
    }
    for (let i = 0; i < this.emailad.length; i++) {
    
    var that = this;

    that.ngxService.start()
 
 
    let obj: Message = {
      
      name: this.profileForm.value.Name,
      description: this.profileForm.value.Description,
      subject: this.profileForm.value.Objet,
      date:this.profileForm.value.Date,
      email: this.emailad[i],
      time:this.profileForm.value.Time,
      sendTo:this.emailad[i],
      file:this.profileForm.value.File,
    };

 
    this.socket.sendMessage(obj);
 
 
    this.service.GetUserById(this.id).subscribe(

      data=>{
               this.user=data
               this.email=data.email;
               this.sentNotif(this.email,this.emailad[i]);
               this.ser.SendMaillSansfile(this.profileForm.value.Name,this.profileForm.value.Description,this.profileForm.value.Objet,
                this.profileForm.value.Date,this.emailad[i],this.profileForm.value.Time,this.email,this.profileForm.value.File).subscribe(
                  data => {
                    this.toestar.success(this.emailad[i]);
               this.ngOnInit();

               that.ngxService.stop()
              
                  },
                  err => {
                    this.errorMessage = err.error.message;
                    that.ngxService.stop()
                  }
              
              
              
                  );
             
      },
      err=>
      {
    
      }
    )
    }

  }
  sentNotif(email1:string,email:string)
  {
    this.service.saveNotif("Nouvelle Notification de Email", email1,email,this.date).subscribe(
      dta=>{

      },err=>{

      }
    )
  }

}
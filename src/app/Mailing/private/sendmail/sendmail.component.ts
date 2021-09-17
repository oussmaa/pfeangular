import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SocketService } from 'src/app/socket.service';
import { Message } from '../../shared/Model/Message';
import { SendMailService } from '../../shared/Service/send-mail.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent implements OnInit {

  constructor(private ngxService: NgxUiLoaderService,private socket:SocketService,private toestar:ToastrService, private router: Router,private ser:SendMailService,private route: ActivatedRoute) {

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
      'Email': new FormControl(null,[Validators.required,Validators.email]),
      'Date': new FormControl(null,[Validators.required]),
      'Time': new FormControl(null,[Validators.required]),
      'Objet': new FormControl(null,[Validators.required]),
      'File': new FormControl(null),

    });
  }
  onSubmit()
  {


 
 
    let obj: Message = {
      
      name: this.profileForm.value.Name,
      description: this.profileForm.value.Description,
      subject: this.profileForm.value.Objet,
      date:this.profileForm.value.Date,
      email:this.profileForm.value.Email,
      time:this.profileForm.value.Time,
      sendTo:this.profileForm.value.Email,
      file:this.profileForm.value.File,
    };

 
    this.socket.sendMessage(obj);
    this.toestar.success("Send Succée");
    this.router.navigate(['/dashbored/mailing'], {relativeTo: this.route});

   this.ser.SendMaill(this.profileForm.value.Name,this.profileForm.value.Description,this.profileForm.value.Objet,
    this.profileForm.value.Date,this.profileForm.value.Email,this.profileForm.value.Time,this.profileForm.value.Email,this.profileForm.value.File).subscribe(
      data => {
     
   
      
  
      },
      err => {
        this.errorMessage = err.error.message;
   
      }
  
  
  
      );
 

  }

}
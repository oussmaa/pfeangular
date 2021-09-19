import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SendMailService } from '../../shared/Service/send-mail.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SmsComponent implements OnInit {
  emailtest!:string;

  mobnumPattern = "^((\\+216-?)|0)?[0-9]{8}$"; 
  emailad:Array<string> =[];
 profileForm!: FormGroup;

  constructor(private service :SendMailService,private toaster:ToastrService,private ngxService: NgxUiLoaderService, ) { }

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      'Description': new FormControl(null,Validators.required),
       'Phone': new FormControl(null,[Validators.required,Validators.pattern(this.mobnumPattern)]),
    
    });
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
  { if(this.emailad.length==0)
    {
this.ngxService.start();
    this.service.SendMessagePhone("+216"+this.profileForm.value.Phone,this.profileForm.value.Description).subscribe
    (
data =>
{ this.ngxService.stop();
  this.toaster.success("Message Send");
  this.ngOnInit();
  
},
err=>{
  this.toaster.error("Message Not Send");


  this.ngxService.stop();

}

    )
  }
 
  else{
    for (let i = 0; i < this.emailad.length; i++) {

    this.ngxService.start();
    this.service.SendMessagePhone("+216"+this.emailad[i],this.profileForm.value.Description).subscribe
    (
data =>
{ this.ngxService.stop();
  this.toaster.success("Message Send");
  this.ngOnInit();
  
},
err=>{
  this.toaster.error("Message Not Send");


  this.ngxService.stop();

}

    )
  }
}
  }
}

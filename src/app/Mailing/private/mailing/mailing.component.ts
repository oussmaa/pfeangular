import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
 import { data } from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from 'src/app/socket.service';
import { Message } from '../../shared/Model/Message';
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';
import { SendMailService } from '../../shared/Service/send-mail.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {
  public user!: User;
id:any;
email:any;
  constructor(private ser:SocketService,private service:SendMailService,private seri:AuthentificationService) { }
  Nom!: string;
  public messages1:Message[]=[] ;
  errorMessage = '';


  ngOnInit(): void {
    this.id=localStorage.getItem("user_id");

    this.GetMessageglobale();
    this.GetMessage();

  }
  GetMessage()
  {
    this.messages1=this.ser.getmessage();
    let bSubject = new BehaviorSubject(this.messages1); 

bSubject.next(this.messages1);

bSubject.subscribe(value => {
  console.log("Subscription got", value);  
});

  }
  GetMessageglobale()
  {
    this.seri.GetUserById(this.id).subscribe(

      data=>{
               this.user=data
               this.email=data.email;
               this.service.getMessageSendto(this.email).subscribe(data =>
                {
                this.messages1=data;
                },
                err=>
                {
                  this.errorMessage = err.error.message;
                
                }
                
                
                 )
      },err=>{

      });





  }
  Serch()
  {
    if(this.Nom!="")
    {
    this.messages1=this.messages1.filter(res=>  {
return res.email?.toLocaleLowerCase().match(this.Nom.toLocaleLowerCase());});
    }
    else if(this.Nom=="")
    {
      this.ngOnInit();
    }



  }
}
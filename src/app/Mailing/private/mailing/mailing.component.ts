import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
 import { data } from 'jquery';
import { BehaviorSubject } from 'rxjs';
import { SocketService } from 'src/app/socket.service';
import { Message } from '../../shared/Model/Message';
import { SendMailService } from '../../shared/Service/send-mail.service';

@Component({
  selector: 'app-mailing',
  templateUrl: './mailing.component.html',
  styleUrls: ['./mailing.component.css']
})
export class MailingComponent implements OnInit {

  constructor(private ser:SocketService,private service:SendMailService) { }

  public messages1:Message[]=[] ;
  errorMessage = '';


  ngOnInit(): void {
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

 this.service.getMessage("gharianioussama24@gmail.com").subscribe(data =>
{
this.messages1=data;
},
err=>
{
  this.errorMessage = err.error.message;

}


 )



  }
 
}
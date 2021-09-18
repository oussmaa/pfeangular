import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { Message } from '../../shared/Model/Message';
import { SendMailService } from '../../shared/Service/send-mail.service';

@Component({
  selector: 'app-email-detaille',
  templateUrl: './email-detaille.component.html',
  styleUrls: ['./email-detaille.component.css']
})
export class EmailDetailleComponent implements OnInit {

  
  public messages1!: Message;
errorMessage = '';
email:any;
emailsendto:any;
date:any;
time:any;
Objet:any;
desc:any;
file:any

  constructor(private route: ActivatedRoute,private service:SendMailService) { }

  ngOnInit() {

    let id = this.route.snapshot.params.id;

  

 

  
this.service.findbyid(id).subscribe(
data=>{
this.messages1=data;
this.email=data.email;
this.emailsendto=data.sendTo;
this.date=data.date;
this.time=data.time;
this.Objet=data.subject;
this.desc=data.description;
 ;

 
}
,err=>
{

}


)
}
}
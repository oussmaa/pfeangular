import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../Model/Message';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json',
      
    })
  }
  constructor(private httpClient: HttpClient) { }


  SendMessagePhone(phoneNumber: string, message: string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/v1/sms", {
      phoneNumber,
      message,
   
    
   
    }, this.httpOptions);
}

  SendMaill(name: string, description: string, subject: string,date:Date, email: string,time:String,sendTo:string,file:string): Observable<any> {
    return this.httpClient.post("http://localhost:8065/api/mail/sendmail", {
      name,
      description,
      subject,
      date ,
      email,
      time ,
      sendTo:sendTo,
      file:'C:/Users/Administrator/Desktop/1.pdf'
    
   
    }, this.httpOptions);
}
getMessage(email:string): Observable<any> {
  return this.httpClient.get<Message[]>("http://localhost:8065/api/mail/findbyEmail/"+email );
}
}

import { Injectable } from '@angular/core';
import { Sms } from './Sms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Message } from './Mailing/shared/Model/Message';
import { id } from '@swimlane/ngx-charts';

declare var SockJS: any;
declare var Stomp: any;
@Injectable({
  providedIn: 'root'
})
export class SocketService {
   // Store the chat messages
   public messages:Message[] = [];

 
   public stompClient:any;
  
   httpOptions =
   {
     headers: new HttpHeaders({
       'Content-Type': 'application/Json',
       
     })
   }
  constructor(private httpClient: HttpClient) {
 
    this.initializeWebSocketConnection();
  }


  initializeWebSocketConnection() {
    /**
     * Create a SockJS server with created back-end endpoint called /chat-websocket and added it over Stomp.
     */
    const serverUrl = 'http://localhost:8065/chat-websocket';
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
     const that = this;
    /**
     * Connect stomp client and subscribe asynchronously to the chat message-handling Controller endpoint and push any message body into the messages array
     */
    this.stompClient.connect({}, function(_frame: any) {
      that.stompClient.subscribe('/chat/messages', (message: { body: string; }) => {
        if (message.body) {
          let obj = JSON.parse(message.body);
  
     that.addMessage(obj.id, obj.name, obj.description,obj.subject,obj.date,obj.email,obj.time,obj.sendTo,obj.file);
   
        }
      });
    });
  }



  sendMessage(msg: Message) {
    this.stompClient.send('/app/sendmsg/'+msg.email, {}, JSON.stringify(msg));
 }
  getmessage()
  {
    return this.messages;
  }
   addMessage(id: number, name: string, description: string,subject:string,date:Date,email:string,time:string,sendTo:string,file:string) {
    this.messages.push( {
         id:id,
        name: name,
        description: description,
        subject:subject,
        date:date,
        email:email,
       time:time,
       sendTo:sendTo,
       file:file
    }
     );
  }
}
 
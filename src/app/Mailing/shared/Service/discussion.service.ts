import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
 import { Messages } from '../Model/Messages';

 declare var SockJS: any;
 declare var Stomp: any;


@Injectable({
  providedIn: 'root'
})
export class DiscussionService {
  public messages:Messages[] = [];

 
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
   this.stompClient.connect({}, function(frame: any) {
     that.stompClient.subscribe('/chat2/messages2', (message: { body: string; }) => {
       if (message.body) {
         let obj = JSON.parse(message.body);
 
    that.addMessage(obj.text, obj.username, obj.avatar,obj.room,obj.idsend,obj.date);
  
       }
     });
   });
 }
 getmessage()
 {
   return this.messages;
 }
  addMessage(message1: string, username1: string, avatar1: string,room1:string,idsend1:string,datee:Date) {
   this.messages.push( {
       text: message1,
       username: username1,
       avatar:avatar1,
       room:room1,
       idsend:idsend1,
      date:datee
   }
    );
 }

 
 
 sendMessage(msg: Messages) {
  this.stompClient.send('/app/sendmsg2/'+msg.room, {}, JSON.stringify(msg));
}
 

 getmessagebyroom(id:string): Observable<Messages[]> {
   return this.httpClient.get<Messages[]>("http://localhost:8065/api/projet/findbyroom/"+id );
 }





 postMessage(text: string, username: string, avatar: string,room:string, idsend: string,date:Date): Observable<any> {
   return this.httpClient.post("http://localhost:8065/api/projet/Addmessage", {
     text,
     username,
     avatar,
     room,
     idsend ,
     date
   
   
  
   }, this.httpOptions);
 }
}
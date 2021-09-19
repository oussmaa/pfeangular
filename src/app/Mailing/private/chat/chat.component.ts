import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { data } from 'jquery';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { Messages } from '../../shared/Model/Messages';
import { Room } from '../../shared/Model/Room';
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';
import { DiscussionService } from '../../shared/Service/discussion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
id:any;
id2:any;
  Employes!: Room;
  name:any;
myDate = new Date();
username:any;
user!:User;
public messages:Messages[] = [];
public messages1:Messages[]=[] ;

errorMessage = '';
  constructor(private toaster:ToastrService,private route: ActivatedRoute,private chat:DiscussionService,private service:AuthentificationService) { }
  form: any = {
  
    newMessage :null,
    
 };
  ngOnInit(): void {



    this.id=localStorage.getItem("user_id");
     this.id2 = this.route.snapshot.params.id;
this.service.GetUserById(this.id).subscribe(
  
  ata=>{
this.user=ata;
this.name=ata.username;
},err=>{

})





this.service.getroombyid(this.id2).subscribe(
  data=>{
this.Employes=data;
this.username=data.name;
  this.getMessage(this.username)
  },
  err=>{

  }
)
 

  }
  sendMessage() {
    if(this.form.newMessage!=null)
    {
    let obj: Messages = {
      
      text: this.form.newMessage,
      username: this.username,
      avatar: this.name,
      room: this.id2,
      idsend:this.id,
      date:this.myDate
    };

 
    this.chat.sendMessage(obj);
    
this.GetMessage();
    this.chat.postMessage(this.form.newMessage,this.name,this.name,this.username,this.id,this.myDate).subscribe(
      data => {
     
  
  
      },
      
      err => {
        this.errorMessage = err.error.message;
       }
    );
   }
   else{
     this.toaster.error("Please write message")
   }
  
  
  
  }
  getMessage(name:string)
  {
    this.chat.getmessagebyroom(name).pipe().subscribe(
      mess => {
        this.messages1 = mess;
        
     
      },
      err => {
        this.errorMessage = JSON.parse(err.error).message;
      }
    );
  }
  GetMessage()
  {
    this.messages1=this.chat.getmessage();
    let bSubject = new BehaviorSubject(this.messages1); 

bSubject.next(this.messages1);

bSubject.subscribe(value => {
  console.log("Subscription got", value);  
});

  }
}

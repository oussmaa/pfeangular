import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Notif } from '../../shared/Model/Notif';
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';

@Component({
  selector: 'app-navprivate',
  templateUrl: './navprivate.component.html',
  styleUrls: ['./navprivate.component.css']
})
export class NavprivateComponent implements OnInit {
admin:any;
employer:any;
client:any;
supper:any;

Employes: Notif[]=[];
id25:any;
admin1:any;
employer1:any;
client1:any;
public user!: User;
name:any;
image:any;
fffff:any;
  retrievedImage:any="http://localhost:8065/api/auth/showme/";
id:any;
supper1:any;
test:any;
  constructor(private translate:TranslateService,private route:Router,private service:AuthentificationService) { 
   
   
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    this.id=localStorage.getItem("user_id");
    this.admin=localStorage.getItem('isLoginAdmin');
    this.employer=localStorage.getItem('isLoginEmployer');
    this.client=localStorage.getItem('isLoginClient');
    this.supper=localStorage.getItem('isLoginSupperAdmin');
if(this.admin=="true")
{
  this.admin1=true;
  this.employer1=false
  this.supper1=false
  this.client1=false
}
 else if(this.employer=="true")
 {
   this.admin1=false;
   this.employer1=true
   this.supper1=false
   this.client1=false
 }

 else if(this.client=="true")
 {
   this.admin1=false;
   this.employer1=false
   this.supper1=false
   this.client1=true
 }
 else
 {
  this.admin1=false;
  this.employer1=false
  this.supper1=true
  this.client1=false
 }






 
 this.service.GetUserById(this.id).subscribe(

  data=>{
           this.user=data;
           this.name=data.username;
           console.log(this.user)
           if(this.user.image=="")
           {
             this.fffff="../../assets/img/profiled.jpg"; 
           }
           else{
             this.fffff=this.retrievedImage+this.user.image;
        
 
           }
 
  },err=>{

  })
 
  this.service.GetUserById(this.id).subscribe(

    data=>{
      this.service.getNotif(data.email).subscribe(


data=>{
this.Employes=data;
this.test=this.Employes.length;
},

err=>{

}


      )


       }
    ,
    err=>{

    })

  }
  changlangueEng()
  {
this.translate.use('en');
  }
  changlangueFr()
  {
this.translate.use('fr');
  }
  Logout()
  {

    this.service.logout();
    this.route.navigate(['/'])
  }
}

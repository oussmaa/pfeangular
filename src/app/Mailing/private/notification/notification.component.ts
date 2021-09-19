import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { Notif } from '../../shared/Model/Notif';
import { AuthentificationService } from '../../shared/Service/authentification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  Employes: Notif[]=[];
  id:any;
  constructor(private service:AuthentificationService,private ngxService: NgxUiLoaderService, ) { }

  ngOnInit(): void {


    var that = this;
    that.ngxService.start()

    setTimeout(function(){

      that.ngxService.stop()
      
    }, 500);

    this.id=localStorage.getItem("user_id");

    this.service.GetUserById(this.id).subscribe(

      data=>{
        this.service.getNotif(data.email).subscribe(


data=>{
this.Employes=data;
},

err=>{

}


        )


         }
      ,
      err=>{

      })






    
  }
 
}

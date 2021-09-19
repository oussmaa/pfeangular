import { Component, OnInit } from '@angular/core';
import { Room } from '../../shared/Model/Room';
import { AuthentificationService } from '../../shared/Service/authentification.service';

@Component({
  selector: 'app-choisieroom',
  templateUrl: './choisieroom.component.html',
  styleUrls: ['./choisieroom.component.css']
})
export class ChoisieroomComponent implements OnInit {

  Employes: Room[]=[];
  id:any;
  selctednumber!: number;
  constructor(private service:AuthentificationService ) { }
 
  ngOnInit(): void {
  
this.selctednumber=4;


    this.id=localStorage.getItem("user_id");

    this.service.GetUserById(this.id).subscribe(

      data=>
      {
     this.service.getbyiemailclient(data.email).subscribe(data=>
      
      
      {
        this.Employes=data
   
   
   
      },err=>{})     
       }
      
      ,err=>
      {

      }
      
      
      )

  }
  onSelcted(val:any)
  {

this.selctednumber=val;
  }

  
}

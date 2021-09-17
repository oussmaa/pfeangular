import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { data } from 'jquery';
import { Color, Label } from 'ng2-charts';
import { User } from '../../shared/Model/User';
import { AuthentificationService } from '../../shared/Service/authentification.service';
 
import { productSales } from '../dashbored/produit';

@Component({
  selector: 'app-dashbored',
  templateUrl: './dashbored.component.html',
  styleUrls: ['./dashbored.component.css']
})
export class DashboredComponent implements OnInit {
 nbclient:any;
  x1:any=[];
  Employes: User[]=[];
  nbadmin:any;
  errorMessage = '';
 nbemployes:any;
  constructor(private service:AuthentificationService) { 
 
  }
 
 
  ngOnInit(): void {

this.service.getAllUser("Client").subscribe(
  data=>
  {
    this.Employes = data;
    console.log(this.Employes.length)
  },
  err=>
  {
    this.errorMessage = err.error.message;

  }
)


  }
   data:any;
ChartOptions:ChartOptions={
  responsive:true,
  
};
ChartColors:Color[]=[

{
  
  backgroundColor:'#80aaff'
}


]
 ChartLabels:Label[] = ['January', 'February', 'March', 'April', 'May', 'June','July','August','September','October','November','December'];
 ChartType:ChartType='bar';
 ChartPlugins :any=[];

 ChartData:ChartDataSets[]=[{data:[250,700,800,900,4000],label:'satstique'}]
 ChartData2:ChartDataSets[]=[{data:[250,700,800,900,40],label:'satstique2'}]
 
 ChartLegend=true;


  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Client', 'Admin', 'Employes'];
  barChartType: ChartType = 'doughnut';
  barChartLegend = true;
  barChartPlugins :any=[];

  barChartData: ChartDataSets[] = [
    { data: [45, 1, 60], label: 'Client' }
  ];



}

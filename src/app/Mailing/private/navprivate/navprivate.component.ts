import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
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
  constructor(private translate:TranslateService,private route:Router,private service:AuthentificationService) { 
   
   
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {

    this.admin=this.service.isLoginAdmin;
    this.employer=this.service.isLoginEmployer;
    this.client=this.service.isLoginClient;
    this.supper=this.service.isLoginSupperAdmin;
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

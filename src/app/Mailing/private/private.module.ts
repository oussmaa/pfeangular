import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboredComponent } from './dashbored/dashbored.component';
import { ListemployerComponent } from './listemployer/listemployer.component';
import { MailingComponent } from './mailing/mailing.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SmsComponent } from './sms/sms.component';
import { NavprivateComponent } from './navprivate/navprivate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SendmailComponent } from './sendmail/sendmail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MessageSendeComponent } from './message-sende/message-sende.component';
import { EmailDetailleComponent } from './email-detaille/email-detaille.component';
import { AgmCoreModule } from '@agm/core';
import { ChartsModule } from 'ng2-charts';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MailingModule } from '../mailing.module';
import {
  NgxUiLoaderModule,
} from 'ngx-ui-loader';
import { ListAdminstarteurComponent } from './list-adminstarteur/list-adminstarteur.component';
import { PrjetComponent } from './prjet/prjet.component';
import { ClientComponent } from './client/client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { GererDisucsionComponent } from './gerer-disucsion/gerer-disucsion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListemployesssComponent } from './listemployesss/listemployesss.component';
import { AjoutadminComponent } from './ajoutadmin/ajoutadmin.component';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { ListprojetComponent } from './listprojet/listprojet.component';
import { ListroommdiscussionComponent } from './listroommdiscussion/listroommdiscussion.component';
import { ChatComponent } from './chat/chat.component';
    @NgModule({
  declarations: [
    DashboredComponent,
    ListemployerComponent,
    MailingComponent,
    SmsComponent,
    MapsComponent,
    NotificationComponent,
    ProfileComponent,
    NavprivateComponent,
    SendmailComponent,
    MessageSendeComponent,
    EmailDetailleComponent,
    ListAdminstarteurComponent,
    PrjetComponent,
    ClientComponent,
    ListClientComponent,
    GererDisucsionComponent,
    ListemployesssComponent,
    AjoutadminComponent,
    AjoutClientComponent,
    ListprojetComponent,
    ListroommdiscussionComponent,
    ChatComponent,
      
  ],
  
  imports: [
    CommonModule,
    ReactiveFormsModule,FormsModule,
    PrivateRoutingModule,
    FormsModule,ReactiveFormsModule,AngularEditorModule  ,NgxChartsModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDMyRF_BdTByyt3YxtVdEVVWIALjKC3sAM'
    })
      ,ChartsModule,
      
      TranslateModule.forRoot({
        loader:{
        
          provide:TranslateLoader,
          useFactory:httpLoaderFactory,
          deps:[HttpClient]
        }
        
        
             }),
              
             NgxUiLoaderModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class PrivateModule { }
export function httpLoaderFactory(http:HttpClient)
{
  return new TranslateHttpLoader(http);
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutClientComponent } from './ajout-client/ajout-client.component';
import { AjoutadminComponent } from './ajoutadmin/ajoutadmin.component';
import { ChatComponent } from './chat/chat.component';
import { ClientComponent } from './client/client.component';
import { DashboredComponent } from './dashbored/dashbored.component';
import { EmailDetailleComponent } from './email-detaille/email-detaille.component';
import { GererDisucsionComponent } from './gerer-disucsion/gerer-disucsion.component';
import { ListAdminstarteurComponent } from './list-adminstarteur/list-adminstarteur.component';
import { ListClientComponent } from './list-client/list-client.component';
 import { ListemployerComponent } from './listemployer/listemployer.component';
import { ListemployesssComponent } from './listemployesss/listemployesss.component';
import { ListprojetComponent } from './listprojet/listprojet.component';
import { ListroommdiscussionComponent } from './listroommdiscussion/listroommdiscussion.component';
import { MailingComponent } from './mailing/mailing.component';
import { MapsComponent } from './maps/maps.component';
import { MessageSendeComponent } from './message-sende/message-sende.component';
import { NotificationComponent } from './notification/notification.component';
import { PrjetComponent } from './prjet/prjet.component';
import { ProfileComponent } from './profile/profile.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SmsComponent } from './sms/sms.component';

const routes: Routes = [

  {
    path:'',
    component:DashboredComponent   
    
  },
  {
    path:'listemployer',
    component:ListemployerComponent   
    
  },
  {
    path:'mailing',
    component:MailingComponent   
    
  },
  {
    path:'maps',
    component:MapsComponent   
    
  },
  {
    path:'notification',
    component:NotificationComponent   
    
  },
  {
    path:'listadmin',
    component:ListAdminstarteurComponent   
    
  },
  {
    path:'projet',
    component:PrjetComponent   
    
  },
    
  {
    path:'addclient',
    component:AjoutClientComponent   
    
  },
  {
    path:'addadmin',
    component:AjoutadminComponent   
    
  },
  {
    path:'listclient',
    component:ClientComponent   
    
  },
  {
    path:'listprojet',
    component:ListprojetComponent   
    
  },
  {
    path:'listroom',
    component:ListroommdiscussionComponent   
    
  },
  {
    path:'chat',
    component:ChatComponent   
    
  },
  {
    path:'discussion',
    component:GererDisucsionComponent   
    
  },
  {
    path:'listemp',
    component:ListemployesssComponent   
    
  },
  {
    path:'profile',
    component:ProfileComponent   
    
  },
  {
    path:'sms',
    component:SmsComponent   
    
  },
  {
    path:'sendmail',
    component:SendmailComponent   
    
  },
  {
    path: 'emaildetaille/:id',
    component: EmailDetailleComponent 
     
   },
   {
    path:'emailsends',
    component:MessageSendeComponent   
    
  },
  {
    path:'',
    redirectTo:'',
    pathMatch:'full' 
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './Mailing/shared/Components/notfound/notfound.component';

const routes: Routes = [


  {
    path:'',
    loadChildren:()=>import('./Mailing/mailing.module').then(m=>m.MailingModule)  ,
     

  }

,
 
  {
    path:'',
    redirectTo:'',
    pathMatch:'full',
 

  },
  { path: '404',
     component: NotfoundComponent
 },

    { path: '**', 
    redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

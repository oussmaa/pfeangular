import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsloginGuard } from '../../shared/Guards/islogin.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {
    path:'',
    component:LoginComponent   
    
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
export class LoginRoutingModule { }

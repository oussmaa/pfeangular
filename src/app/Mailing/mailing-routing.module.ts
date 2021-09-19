import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpasswordComponent } from './Auth/forgetpassword/forgetpassword.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';
import { IsloginGuard } from './shared/Guards/islogin.guard';
import { UsergardesGuard } from './shared/Guards/usergardes.guard';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./Auth/login/login.module').then(m=>m.LoginModule),
    // canActivate:[IsloginGuard]


},
{
  path:'dashbored',
  loadChildren:()=>import('./private/private.module').then(m=>m.PrivateModule),
  // canActivate:[UsergardesGuard]


},
{
  path:'register',
  loadChildren:()=>import('./Auth/register/register.module').then(m=>m.RegisterModule),


},
{
  path:'forgetpassword',
  component:ForgetpasswordComponent

},
{
  path:'confirememail/:id',
  component:ConfirmEmailComponent

},
{
  path:'updatepassword/:id',
  component:UpdatePasswordComponent

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
export class MailingRoutingModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailingRoutingModule } from './mailing-routing.module';
import { ForgetpasswordComponent } from './Auth/forgetpassword/forgetpassword.component';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

import { UpdatePasswordComponent } from './update-password/update-password.component';
 
import {
  NgxUiLoaderModule,
} from 'ngx-ui-loader';

@NgModule({
  declarations: [
    ForgetpasswordComponent,
    ConfirmEmailComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,
    MailingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
 
})
export class MailingModule { }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MailingModule } from '../../mailing.module';
 
import {
  NgxUiLoaderModule,
} from 'ngx-ui-loader';
@NgModule({
  declarations: [
    RegisterComponent
  ],
  
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
     
    NgxUiLoaderModule
     
  ] ,
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class RegisterModule { }

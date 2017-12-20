import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginComponent } from './app-login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppLoginComponent
  ],
})

export class AppLoginModule { }

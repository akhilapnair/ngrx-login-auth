import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginComponent } from './app-login.component';
import { AppLoginRoutingModule } from './app-login.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    AppLoginRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppLoginComponent
  ],
})

export class AppLoginModule { }
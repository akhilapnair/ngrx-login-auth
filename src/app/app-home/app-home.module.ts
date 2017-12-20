import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeComponent } from './app-home.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../../store/reducers/login.reducer';


@NgModule({
  imports: [
    CommonModule,
    // StoreModule.forEach({'products': loginReducer}),
    // StoreModule.forFeature(loginReducer)
  ],
  declarations: [
    AppHomeComponent
  ]
})

export class AppHomeModule { }

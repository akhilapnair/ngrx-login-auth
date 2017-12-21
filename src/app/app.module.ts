import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { loginReducer } from '../store/reducers/login.reducer';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { AppHomeModule } from '../app/app-home/app-home.module';
import { AppLoginModule } from '../app/app-login/app-login.module';
import { LoginEffects } from '../store/effects/effects';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Routes, RouterModule } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', redirectTo: 'home'},
  { path: 'home', canActivate: [AuthGuard],
    component: AppHomeComponent },
  { path: 'login',
    component: AppLoginComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    AppHomeComponent,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot({'products': loginReducer}),
    EffectsModule.forRoot([LoginEffects]),
    BrowserAnimationsModule,
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  ],
  exports: [],
  providers: [ AuthGuard, AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

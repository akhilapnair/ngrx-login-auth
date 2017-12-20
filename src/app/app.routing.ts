import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLayoutComponent } from './app-layout/app-layout.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
      {path: '', pathMatch: 'full', redirectTo: 'login' },
      { path: '**', redirectTo: 'login'},
      { path: 'home', canActivate: [AuthGuard],
        loadChildren: '../app/app-home/app-home.module#AppHomeModule' },
      { path: 'login',
        loadChildren: '../app/app-login/app-login.module#AppLoginModule' }
  ];



export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes, { enableTracing: false });

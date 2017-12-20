
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate {
    // router: any;
    constructor(private _route: Router, private authService: AuthService) {

    }

    canActivate(route: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.isLoggedIn
        .map((isLoggedIn: boolean) => {
          if (!isLoggedIn) {
            this._route.navigate(['/login']);
            return false;
          }
          return true;
    });
}

}

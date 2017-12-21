import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../store/models/login.model';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor( private router: Router) {}

  login(user: User) {
    if (user.username === 'admin' && user.password === 'admin' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
      console.log('Login Successfully');
    } else {
        console.log('Login error');
    }
  }
}

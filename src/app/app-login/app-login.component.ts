import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LOGIN_SUBMIT } from '../../store/actions/actions';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../store/models/login.model';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {
  pword: any;
  uname: any;
  userData$: Observable<any>;
  form: FormGroup;
  constructor(public store: Store<any>, public routes: Router, private authService: AuthService,
     private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(data: any) {
    console.log(data);
    this.store.dispatch({
      type: LOGIN_SUBMIT,
      payload: { data }
    });
    this.authService.login(data);
    // get the loading state and redirected to home page
    this.userData$ = this.store.select('products');

    // this.routes.navigateByUrl('home');
  }
}

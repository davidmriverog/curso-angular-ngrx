import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';

import { Store, select } from '@ngrx/store';

import * as Auth from '../actions/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user : IUser;

	error$ = this.store.select(state => state.auth.error);
	isLoading$ = this.store.select(state => state.auth.isLoading);

	constructor(private store : Store<any>) {}

	ngOnInit() {
		this.user = {
			username: 'drivero',
			email: 'davidmriverog@gmail.com',
			password: '123'
		};
	}

	login() {


		this.store.dispatch(new Auth.LoginUser({user:this.user}))
	}

}

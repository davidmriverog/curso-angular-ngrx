import { Component, OnInit } from '@angular/core';
import { IUser } from '../models/IUser';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	user : IUser;

	constructor(private authService : AuthService) {}

	ngOnInit() {
		this.user = {
			username: 'drivero',
			email: 'davidmriverog@gmail.com',
			password: '123'
		};
	}

	login() {
		//
	}

}

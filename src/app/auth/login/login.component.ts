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

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user)
      .subscribe((response) => {
        console.log('callBack Response Login. '+response);
      });
  }

}

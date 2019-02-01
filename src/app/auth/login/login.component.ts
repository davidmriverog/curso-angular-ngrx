import { Component, OnInit } from "@angular/core";
import { IUser } from "../models/IUser";

import { Store, select } from "@ngrx/store";

import * as Auth from "../actions/auth.action";

import * as fromAuth from "../../store/reducers/reducers";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: IUser;

  error$ = this.store.select(fromAuth.getAuthError);
  isLoading$ = this.store.select(fromAuth.getAuthLoading);

  constructor(private store: Store<fromAuth.State>) {}

  ngOnInit() {
    this.user = {
      username: "drivero",
      email: "davidmriverog@gmail.com",
      password: "123"
    };
  }

  login() {
    this.store.dispatch(new Auth.LoginUser({ user: this.user }));
  }
}

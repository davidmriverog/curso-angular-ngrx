import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { IUser } from "../models/IUser";

import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userFacked: IUser = {
    email: "davidmriverog@gmail.com",
    username: "drivero",
    password: "123"
  };

  constructor() {}

  // fake login (temp)
  login(user: IUser): Observable<any> {
    let toSend = {
      isLoading: false,
      error: true,
      user: {}
    };

    if (JSON.stringify(user) === JSON.stringify(this.userFacked)) {
      toSend = {
        isLoading: false,
        error: false,
        user: user
      };
    }

    return of(toSend).pipe(delay(2000));
  }
}

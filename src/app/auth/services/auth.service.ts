import { Injectable } from "@angular/core";

import { Observable, of, throwError } from "rxjs";
import { IUser } from "../models/IUser";

import { delay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  userFacked: IUser = {
    username: "drivero",
    password: "123"
  };

  constructor() {}

  // fake login (temp)
  login(user: any): Observable<any> {
    let toSend = {
      isLoading: true,
      error: true,
      ...user
    };

    if (JSON.stringify(user.user) === JSON.stringify(this.userFacked)) {
      toSend = {
        isLoading: false,
        error: false,
        ...user
      };
    } else {
      return throwError("Credenciales Incorrectos");
    }

    return of(toSend).pipe(delay(2000));
  }
}

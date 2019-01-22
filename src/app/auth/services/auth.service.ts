import { Injectable } from '@angular/core';

import { from, Observable } from 'rxjs';
import { IUser } from '../models/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // fake login (temp)
  login(user : IUser) : Observable<any> {
    return from([true]);
  }
}

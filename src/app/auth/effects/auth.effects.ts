import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';

import {
    AuthActionTypes,
    LoggedIn,
    LoggedUser,
    LoginUser,
    LogoutAuth,
    LoginUserError
} from '../actions/auth.action';

import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
}) 
export class AuthEffects {

    constructor(private http : HttpClient, private actions$ : Actions, private authService : AuthService) {}

    @Effect()
    LoginUser$ : Observable<Action> = this.actions$.pipe(
        ofType<LoginUser>(AuthActionTypes.LoginUser),
        tap(v => {
            console.log('LoginUser Effect', v)
        }),
        mergeMap(action =>
            this.authService.login({
                email: action.payload.user,
                username: '',
                password: action.payload.pass
            })
        )
    );

    @Effect()
    LoginUserError$ : Observable<Action> = this.actions$.pipe(
        ofType<LoginUserError>(AuthActionTypes.LoginUserError), // efecto ofType para los errores de auth
        tap(v => {
            console.log('LoggedApi', v.payload)
        }), // evento que se ejecuta al realizar la accion effect
        map(data => {
            // tratamos la data a enviar como respuesta en el effects.
            return {
                type: 'LOGIN_API_ERROR',
                payload: 'Email or password Incorrect'
            }
        })
    );
}

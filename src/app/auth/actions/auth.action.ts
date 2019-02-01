import { Action } from "@ngrx/store";

import { IUser } from "../models/IUser";

// 1er ENUM
export enum AuthActionTypes {
  // CUANDO SE VA A LOGUEAR
  LoginUser = "[Auth] - LOGIN_USER ",
  // CUANDO ESTA LOGUEADO
  LoggedUser = "[Auth] - LOGGED_USER",
  // CUANDO HAY UN ERROR DE ACCESO
  LoginUserError = "[Auth] - LOGGED_USER_ERROR",
  // CUANDO TODO SALIO BIEN Y YA ESTA EN EL SISTEMA
  LoggedIn = "[Auth] - LOGGED_IN",
  // CUANDO CIERRA DE SESION
  LogoutAuth = "[Auth] - LOGOUT_USER"
}

// implementamos evento al iniciar sesion
export class LoginUser implements Action {
  readonly type = AuthActionTypes.LoginUser;

  constructor(public payload: { user: IUser }) {}
}

// cuando se accede correctamente almacenamos los que nos envia el json del api
export class LoggedUser implements Action {
  readonly type = AuthActionTypes.LoggedUser;

  constructor(public payload: any) {}
}

// Action a enviar a realizar cuando es un error de inicio.
export class LoginUserError implements Action {
  readonly type = AuthActionTypes.LoginUserError;

  constructor(public payload: { error: string }) {}
}

// implementamos las acciones cuando se esta logueado
export class LoggedIn implements Action {
  readonly type = AuthActionTypes.LoggedIn;

  constructor(public payload: { isLogin: boolean }) {}
}

// Implementamos acciones cuando cierra sesion
export class LogoutAuth implements Action {
  readonly type = AuthActionTypes.LogoutAuth;

  constructor(public payload: { isLogin: boolean }) {}
}

// export actions
export type actions =
  | LoginUser
  | LoggedUser
  | LoginUserError
  | LoggedIn
  | LogoutAuth;

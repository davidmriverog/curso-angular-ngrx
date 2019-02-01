import * as AuthActions from "../actions/auth.action";
import { AuthActionTypes } from "../actions/auth.action";

// creamos el cuerpo del state
export interface State {
  user: Array<any>;
  tokens: Array<any>;
  error: string;
  isLoading: boolean;
}

const initialState: State = {
  user: [],
  tokens: [],
  error: "",
  isLoading: false
};

// Aplicamos los eventos usandos en el reducers
export function AuthReducer(
  state: State = initialState,
  action: AuthActions.actions
) {
  switch (action.type) {
    case AuthActionTypes.LoginUser:
      return action; // devuelve la accion que es el usuario

    case AuthActionTypes.LoggedUser:
      return {
        ...state,
        isLoading: false,
        token: action.payload
      };
    default:
      return state;
  }
}

export const getAuthState = (state: State) => state.user;
export const getAuthAction = (action: any) => action.payload;
export const getAuthError = (state: State) => state.error;

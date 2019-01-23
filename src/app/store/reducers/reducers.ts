import { environment } from '../../../environments/environment';
import { ActionReducerMap, createSelector, createFeatureSelector, ActionReducer, MetaReducer, Action } from '@ngrx/store';
import * as formRouter from '@ngrx/router-store';

import { RouterStateUrl } from '../shared/utils';

import { storeFreeze } from 'ngrx-store-freeze';

import * as formAuth from '../../auth/reducers/auth.reducer';

// AppState
export interface State {
    auth: formAuth.State,
    router: formRouter.RouterReducerState<RouterStateUrl>;
}

// Lists Reducers
export const reducers: ActionReducerMap<State|any> = {
    auth: formAuth.AuthReducer,
    router: formRouter.routerReducer
};

// Logger
export function logger(reducer : ActionReducer<State>) : ActionReducer<State> {
    
    return function(state: State, action: any): State {
        console.log('event state', state);


        console.log('event action', action);

        return reducer(state, action);
    }
}

export const metaReducers: MetaReducer<State>[] = ! environment.production
    ? [logger, storeFreeze]
    : [];

export const getAuthState = createFeatureSelector<formAuth.State>('auth');

export const getAuth = createSelector(
    getAuthState,
    formAuth.getAuthState
);
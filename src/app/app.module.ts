import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ngrx modules
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { reducers, metaReducers } from './store/reducers/reducers';
import { environment } from 'src/environments/environment';

const NGRX_IMPORTS = [
  // Modulo principal
  StoreModule.forRoot(reducers, {
    metaReducers
  }),
  // Routing Store
  StoreRouterConnectingModule.forRoot({
    stateKey: 'router'
  }),
  // Effects
  EffectsModule.forRoot([]),
  StoreDevtoolsModule.instrument({
    name: 'AngularChatNgGx',
    logOnly: environment.production,
    maxAge: 25
  })
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ...NGRX_IMPORTS // importamos para que funcione en el todo el core de angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

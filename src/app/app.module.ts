import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {MaterialModule} from './modules/material.module';
import {HttpClientModule} from '@angular/common/http';

// Modules
import {VisitorModule} from './modules/visitor.module';
import {AppComponent} from './app.component';
import {CommonModule} from '@angular/common';
import {BusyModule} from 'angular2-busy';
// Components
import {MainNavbarComponent} from './components/shared/navbar/navbar.component';
// Services
import {AuthService} from './network/services/shared/user/auth.service';
import {AppService} from './network/services/shared/app/app.service';

@NgModule({
  declarations: [
    AppComponent,
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    VisitorModule,
    CommonModule,
    BusyModule
  ],
  providers: [
    AuthService,
    AppService,
    {
      provide: MATERIAL_COMPATIBILITY_MODE,
      useValue: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

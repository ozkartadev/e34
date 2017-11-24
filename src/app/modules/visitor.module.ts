import {NgModule} from '@angular/core';

// Components
import {LandingComponent} from '../components/visitor/landing/landing.component';
import {RegisterComponent} from '../components/visitor/register/register.component';
import {LoginComponent} from '../components/visitor/login/login.component';
import {NavbarComponent} from '../components/visitor/navbar/navbar.component';
import {SharedModule} from './shared.module';
// Services
// Routes
import {Routing} from '../routes/visitor.routes';
@NgModule({
  imports: [
    SharedModule,
    Routing
  ],
  declarations: [
    NavbarComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent
  ],
  exports: [
    NavbarComponent,
    LandingComponent,
    RegisterComponent,
    LoginComponent,

    Routing.ngModule
  ],
  providers: []
})

export class VisitorModule {
}

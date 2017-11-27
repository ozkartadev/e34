import {Routes, RouterModule} from '@angular/router';

import {LandingComponent} from '../components/visitor/landing/landing.component';
import {RegisterComponent} from '../components/visitor/register/register.component';
import {LoginComponent} from '../components/visitor/login/login.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: '/'}
];

export const Routing = RouterModule.forRoot(routes, {enableTracing: true});

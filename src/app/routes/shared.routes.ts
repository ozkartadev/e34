import {Routes, RouterModule} from '@angular/router';
import {StoreComponent} from '../components/shared/stores/store.component';

const routes: Routes = [
  {path: 'stores', component: StoreComponent},
  {path: 'stores/category/:categoryId', component: StoreComponent},
  {path: 'stores/view/:storeId', component: StoreComponent}
];

export const Routing = RouterModule.forRoot(routes, {enableTracing: true});

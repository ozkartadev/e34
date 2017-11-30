import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {NestedNavbarCategoriesV1Component} from '../components/shared/navbar/nested-navbar-categories-v1/nested-navbar-categories-v1.component';
import {StoreComponent} from '../components/shared/stores/store.component';
import {SidebarNesterCategoryComponent} from '../components/shared/stores/sidebar/sidebar-nested-category';
// Services
import {SharedCategoryService} from '../network/services/shared/categories/shared-category.service';
// Routes
import {Routing} from '../routes/shared.routes';

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [
    NestedNavbarCategoriesV1Component,
    StoreComponent,
    SidebarNesterCategoryComponent
  ],
  exports: [
    NestedNavbarCategoriesV1Component,
    StoreComponent,
    SidebarNesterCategoryComponent,

    Routing.ngModule
  ],
  providers: [
    SharedCategoryService
  ]
})

export class SharedModule {
}

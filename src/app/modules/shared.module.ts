import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

// Components
import {NestedNavbarCategoriesV1Component} from '../components/shared/navbar/nested-navbar-categories-v1/nested-navbar-categories-v1.component';
import {StoreComponent} from '../components/shared/stores/store.component';
import {SidebarNesterCategoryComponent} from '../components/shared/stores/sidebar/sidebar-nested-category';
import {SidebarFilterComponent} from '../components/shared/stores/sidebar/sidebar-filter.component';
// Services
import {SharedCategoryService} from '../network/services/shared/categories/shared-category.service';
// Routes
import {Routing} from '../routes/shared.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    Routing
  ],
  declarations: [
    NestedNavbarCategoriesV1Component,
    StoreComponent,
    SidebarNesterCategoryComponent,
    SidebarFilterComponent
  ],
  exports: [
    NestedNavbarCategoriesV1Component,
    StoreComponent,
    SidebarNesterCategoryComponent,
    SidebarFilterComponent,

    Routing.ngModule
  ],
  providers: [
    SharedCategoryService
  ]
})

export class SharedModule {
}

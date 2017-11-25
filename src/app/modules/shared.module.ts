import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Components
import {NestedNavbarCategoriesV1Component} from '../components/shared/nested-navbar/nested-navbar-categories-v1.component';

// Services
import {SharedCategoryService} from '../network/services/shared/categories/shared-category.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NestedNavbarCategoriesV1Component
  ],
  exports: [
    NestedNavbarCategoriesV1Component
  ],
  providers: [
    SharedCategoryService
  ]
})

export class SharedModule {
}

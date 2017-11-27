import {Component, OnInit} from '@angular/core';
@Component({
  selector: '[app-nested-navbar-categories-v1]',
  templateUrl: './nested-navbar-categories-v1.component.html',
  styleUrls: ['./nested-navbar-categories-v1.style.css'],
  inputs: ['categories']
})
export class NestedNavbarCategoriesV1Component implements OnInit {
  public categories: any[] = [];
  constructor() {}

  ngOnInit() {
  }

  hasChildCategories(category): boolean {
    return category && category.childCategories && category.childCategories.length;
  }
}

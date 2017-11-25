import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SharedCategoryService} from '../../../network/services/shared/categories/shared-category.service';
@Component({
  selector: 'app-visitor-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public categories:  any[] = [];
  constructor(private router: Router,
              private sharedCategoryService: SharedCategoryService){}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.sharedCategoryService.getPopulatedCategoryList()
      .subscribe(
        success => {
          this.categories = success.items;
        },
        error => {
          console.dir(error);
        }
      );
  }
}

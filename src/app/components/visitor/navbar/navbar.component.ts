import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {SharedCategoryService} from '../../../network/services/shared/categories/shared-category.service';
import {AppService} from '../../../network/services/shared/app/app.service';
@Component({
  selector: 'app-visitor-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {
  public categories:  any[] = [];
  constructor(private router: Router,
              private sharedCategoryService: SharedCategoryService,
              private appService: AppService) {}

  ngOnInit() {
    this.getCategories();
  }

  ngOnDestroy() {
    this.appService.busyIndicatorSubscription.unsubscribe();
  }

  getCategories() {
    this.appService.busyIndicatorSubscription = this.sharedCategoryService.getPopulatedCategoryList()
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

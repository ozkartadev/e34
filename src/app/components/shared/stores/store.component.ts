import {Component, OnInit, OnDestroy} from '@angular/core';
import {AppService} from '../../../network/services/shared/app/app.service';
import {SharedCategoryService} from '../../../network/services/shared/categories/shared-category.service';

@Component({
  selector: 'app-store-component',
  templateUrl: './store.component.html',
  styleUrls: ['./store.style.css']
})
export class StoreComponent implements OnInit, OnDestroy {
  public categories: any[] = [];
  constructor(private appService: AppService,
              private sharedCategoryService: SharedCategoryService) {}

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
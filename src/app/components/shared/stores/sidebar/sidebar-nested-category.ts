import {Component, EventEmitter, OnInit} from '@angular/core';
import {AppService} from '../../../../network/services/shared/app/app.service';
@Component({
  selector: 'app-sidebar-nested-category',
  templateUrl: './sidebar-nested-category.html',
  styleUrls: ['./sidebar-nested-category.style.css'],
  inputs: ['categories'],
  outputs: ['onCheckboxClick']
})
export class SidebarNesterCategoryComponent implements OnInit{
  public categories: any[];
  public onCheckboxClick: EventEmitter<number> = new EventEmitter();

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  changeCategoryFilter(catId){
    this.onCheckboxClick.emit(catId);
  }

  toggle() {

  }
}

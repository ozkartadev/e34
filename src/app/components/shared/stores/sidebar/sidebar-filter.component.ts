import {Component, EventEmitter, OnInit} from '@angular/core';
import {AppService} from '../../../../network/services/shared/app/app.service';
@Component({
  selector: 'app-sidebar-filter',
  templateUrl: './sidebar-filter.component.html',
  styleUrls: ['./sidebar-filter.style.css'],
  inputs: ['categories'],
  outputs: ['onCheckboxClick']
})
export class SidebarFilterComponent implements OnInit{
  public categories: any[];
  public onCheckboxClick: EventEmitter<number> = new EventEmitter();
  public searchWord: string = '';

  constructor(private appService: AppService) {}

  ngOnInit() {
  }

  search() {

  }
}

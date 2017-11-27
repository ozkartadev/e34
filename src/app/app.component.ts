import {Component} from '@angular/core';
import {AppService} from './network/services/shared/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public appService: AppService) {}
}

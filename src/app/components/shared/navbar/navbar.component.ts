import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../network/services/auth.service";
@Component({
  selector: 'app-main-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class MainNavbarComponent implements OnInit {
  private currentUser: any;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    try {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    } catch (ex) {
      console.dir(ex);
    }
  }
}

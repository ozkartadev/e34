import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../network/services/shared/user/auth.service';
@Component ({
  selector: 'app-visitor-landing-page',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private authService: AuthService) {

  }

  ngOnInit() {

  }

}

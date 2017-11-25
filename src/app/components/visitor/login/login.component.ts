import {AfterViewChecked, Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../../../network/services/shared/user/auth.service';
import {NgForm, FormGroup, FormArray, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
@Component ({
  selector: 'app-standard-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewChecked {
  public formErrors = {
  };
  public formErrorMessages = {
  };
  public user: any = {
  };
  public form: NgForm;
  public genericErrorMessage: String = '';
  @ViewChild('registrationForm') viewForm: NgForm;

  constructor(private authService: AuthService,
              private router: Router) {

  }

  ngOnInit() {

  }

  ngAfterViewChecked() {
    if (this.viewForm === this.form) {
      return;
    }
    this.form = this.viewForm;
    if (this.form) {
      this.form.valueChanges
        .subscribe(data => {
          const form = this.form.form;
          for (const field in this.formErrors) {
            if (field) {
              // clear previous error message (if any)
              this.formErrors[field] = '';
              const control = form.get(field);
              if (control &&  !control.valid && control.touched) {
                const messages = this.formErrorMessages[field];
                for (const key in control.errors) {
                  if (key) {
                    this.formErrors[field] += messages[key] ? messages[key] + ' ' : '';
                  }
                }
              }
            }
          }
        });
    }
  }

  login() {
    if (this.form.form.valid) {

    } else {
      this.markAsTouched(this.form.form);
    }
  }

  markAsTouched(group: FormGroup | FormArray) {
    Object.keys(group.controls).map((field) => {
      const control = group.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
        this.validateFormField(field, control)
      } else if (control instanceof FormGroup) {
        this.form.form.markAsTouched();
      }
    });
  }

  validateFormField(field, control) {
    this.formErrors[field] = '';
    if (control &&  !control.valid && control.touched) {
      const messages = this.formErrorMessages[field];
      for (const key in control.errors) {
        if (key) {
          this.formErrors[field] += messages[key] ? messages[key] + ' ' : '';
        }
      }
    }
  }
}

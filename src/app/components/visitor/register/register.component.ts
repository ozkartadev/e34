import {Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm, FormGroup, FormArray, FormControl} from '@angular/forms';
import {AuthService} from '../../../network/services/shared/user/auth.service';
@Component ({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  selector: 'app-standard-registration'
})
export class RegisterComponent implements OnInit , AfterViewChecked{
  public user: any = {};
  public formErrors = {
  };
  public formErrorMessages = {
  };
  public genericErrorMessage: String = '';
  public form: NgForm;
  @ViewChild('registrationForm') viewForm: NgForm;
  constructor(private authService: AuthService,
              private router: Router) {}

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

  register() {
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

import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn.next(true);
    }
  }

  get isLoggedIn() {
    return this.loggedIn;
  }

  logout(): Observable<any> {
    return this.http.delete('/api/v1/users/logout')
      .map((response: any) => {
        if (response != null) {
          this.loggedIn.next(false);
          localStorage.removeItem('currentUser');
        }
        return response;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });

  }

  login(email: string, password: string) {
    const options = {withCredentials: true};
    return this.http.post('/api/v1/users/login', {username: email, password: password}, options)
      .map((response: any) => {
        if (response != null) {
          this.loggedIn.next(true);
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
        return response;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  register(user: any): Observable<any> {
    return this.http.post('/api/v1/users/register', user)
      .map(res => {
        if (res ) {
          this.loggedIn.next(true);
          localStorage.setItem('currentUser', JSON.stringify(res));
        }
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }

  transferMoney(amount, referrer, referral): Observable<any> {
    return this.http.post('api/v1/users/money-transfer', {amount: amount, referrer: referrer, referral: referral})
      .map(res => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}

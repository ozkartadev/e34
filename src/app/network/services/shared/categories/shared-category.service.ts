import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class SharedCategoryService {
  constructor(private http: HttpClient) {
  }

  getPopulatedCategoryList(): Observable<any> {
    return this.http.get(`api/v1/shared/categories/populated-list`)
      .map(res => {
        return res;
      })
      .catch((error: any) => {
        return Observable.throw(error);
      });
  }
}

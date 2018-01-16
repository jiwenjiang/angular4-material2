import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as reducer from '@ngrx/reducer';
import * as load from '@ngrx/action/loading';


@Injectable()
export class HttpService {
  httpNum: number;

  constructor(private http: HttpClient, private store: Store<reducer.State>) {
    this.httpNum = 0;
  }

  private count(v?: boolean) {
    this.httpNum = v ? this.httpNum + 1 : this.httpNum;
    this.store.dispatch(new load.ShowAction());
  }

  public format(data, cb, v?: boolean) {
    this.httpNum = v ? this.httpNum - 1 : this.httpNum;
    if (this.httpNum === 0) {
      setTimeout(() => {
        this.store.dispatch(new load.HideAction());
      }, 1000);
    }
    if (data && data.resCode === 0) {
      cb(data.resData);
    }
  }

  public get(url: string, body: any, cb, options) {
    this.count(options.notload);
    const ops = Object.assign({}, {params: body}, options);
    this.http.get(url, ops).subscribe(data => {
      this.format(data, cb, options.notload);
    });
  }

  public post(url: string, body: any, cb, options) {
    const ops = Object.assign({}, options);
    this.http.post(url, body, ops).subscribe(data => {
      this.format(data, cb, options.notload);
    });
  }

  public put(url: string, body: any, cb, options) {
    const ops = Object.assign({}, options);
    this.http.post(url, body, ops).subscribe(data => {
      this.format(data, cb, options.notload);
    });
  }

  public delete(url: string, body: any, cb, options) {
    const ops = Object.assign({}, {params: body}, options);
    this.http.post(url, ops).subscribe(data => {
      this.format(data, cb, options.notload);
    });
  }


}

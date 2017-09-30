import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get(url: string, body: any, cb, options) {
    const ops = Object.assign({}, {params: body}, options);
    this.http.get(url, ops).subscribe(data => {
      this.format(data, cb);
    });
  }

  public post(url: string, body: any, cb, options) {
    const ops = Object.assign({}, options);
    this.http.post(url, body, ops).subscribe(data => {
      this.format(data, cb);
    });
  }

  public put(url: string, body: any, cb, options) {
    const ops = Object.assign({}, options);
    this.http.post(url, body, ops).subscribe(data => {
      this.format(data, cb);
    });
  }

  public delete(url: string, body: any, cb, options) {
    const ops = Object.assign({}, {params: body}, options);
    this.http.post(url, ops).subscribe(data => {
      this.format(data, cb);
    });
  }

  public format(data, cb) {
    if (data[0].resCode === 0) {
      cb(data[0].resData);
    }
  }

}

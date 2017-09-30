import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get(url, body, cb, options) {
    const getParam = Object.assign({}, {params: body}, options);
    this.http.get(url, getParam).subscribe(data => {
      cb(data);
    });
  }

}

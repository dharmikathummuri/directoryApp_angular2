import { Injectable } from '@angular/core';
import{Http,Response,Headers,RequestOptions} from  '@angular/http';
import 'rxjs/Rx';﻿
// import 'rxjs/add/operator/map';﻿

@Injectable()
export class DataService {

  constructor(private http: Http) { }
  fetchData(){
    return this.http.get("https://directory-app-e76c9.firebaseio.com/.json").map(
      (res) => res.json()
    );
    }

}

/**
 * Created by wz on 2017/6/9.
 */
import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
<<<<<<< HEAD
=======
import {Http, RequestOptions, Headers} from '@angular/http';
>>>>>>> a9582d4ad1fda61498be61b5623770ae9d8dc825
import {Comment} from '../models/Comment'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ResultModel} from '../models/ResultModel';

const serverURL = 'http://192.168.31.36:8000/'; // TODO
declare let $: any;
@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  addComment(comment: Comment): Observable<ResultModel> {
<<<<<<< HEAD
  	const headers=new Headers({
  		'Content-Type': 'application/x-www-form-urlencoded'
  	});
  	const options=new RequestOptions({headers:headers,body:comment});
    const uri = 'http://127.0.0.1:8000/message'; // TODO
    return this.http.post(serverURL + uri, comment,options).map(response => response.json());
=======
    const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    const options = new RequestOptions({headers: headers});
    const uri = 'search'; // TODO
    return this.http.post(serverURL + uri, $.param(comment), options).map(response => response.json() as ResultModel);
>>>>>>> a9582d4ad1fda61498be61b5623770ae9d8dc825
  }
}

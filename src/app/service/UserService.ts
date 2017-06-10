/**
 * Created by wz on 2017/6/9.
 */
import {Http, RequestOptions, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Comment} from '../models/Comment'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ResultModel} from '../models/ResultModel';

const serverURL = ''; // TODO
@Injectable()
export class UserService {
  constructor(private http: Http) {
  }

  addComment(comment: Comment): Observable<ResultModel> {
  	const headers=new Headers({
  		'Content-Type': 'application/x-www-form-urlencoded'
  	});
  	const options=new RequestOptions({headers:headers,body:comment});
    const uri = 'http://127.0.0.1:8000/message'; // TODO
    return this.http.post(serverURL + uri, comment,options).map(response => response.json());
  }
}

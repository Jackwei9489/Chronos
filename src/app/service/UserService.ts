/**
 * Created by wz on 2017/6/9.
 */
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
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
    const uri = 'xx'; // TODO
    return this.http.post(serverURL + uri, comment).map(response => response.json());
  }
}

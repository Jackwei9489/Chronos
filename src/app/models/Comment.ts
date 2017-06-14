/**
 * Created by wz on 2017/6/9.
 */
export class Comment {
  constructor(public name: string, public email: string, public message: string, public id?: number) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.id = id;
  }
}

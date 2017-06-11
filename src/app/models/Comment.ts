/**
 * Created by wz on 2017/6/9.
 */
export class Comment {
  constructor(public name: string, public email: string, public message: string, public id?: number) {}
  clear(): void {
    this.name = this.email = this.message = '';
  }
}

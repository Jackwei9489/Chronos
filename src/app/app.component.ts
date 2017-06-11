import {AfterViewInit, Component} from '@angular/core';
import {UserService} from './service/UserService';
import {Comment} from './models/Comment';
import {ResultModel} from './models/ResultModel';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  opened = false;
  comment: Comment = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private userservice: UserService) {
  }

  ngAfterViewInit(): void {
    $('#dowebok').fullpage({
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      anchors: ['Home', 'Science', 'Art', 'Project', 'Team', 'Message'],
      menu: '.navbr'
    });
  }

  openMenu() {
    console.log(123);
    this.opened = !this.opened;
  }

  nextPage() {
    $.fn.fullpage.moveSectionDown();
  }

  addComment(commentForm) {
    if (commentForm.valid) {
      this.userservice.addComment(this.comment).subscribe((resultMode: ResultModel) => {
        if (resultMode.code < 0) {
          // success TODO
          return;
        }
        // fail TODO
      })
    }
  }
}

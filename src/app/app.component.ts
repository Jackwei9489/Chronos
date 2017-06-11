import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from './service/UserService';
import {Comment} from './models/Comment';
import {ResultModel} from './models/ResultModel';
import {Member} from './models/Member';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  opened = false;
  comment: Comment = new Comment('', '', '');
  team: Array<Member> = [];

  nextPage() {
    $.fn.fullpage.moveSectionDown();
  }

  constructor(private userservice: UserService) {
  }

  ngOnInit(): void {
    this.userservice.fetchMember().subscribe((resultMode: ResultModel) => {
      if (resultMode.code > 0) {
        this.team = resultMode.model;
      }
    })
  }

  ngAfterViewInit(): void {
    $('#dowebok').fullpage({
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      anchors: ['Home', 'Science', 'Art', 'Project', 'Team', 'Message'],
      menu: '.navbr'
    });
  }

  openMenu() {
    this.opened = !this.opened;
  }

  addComment(commentForm) {
    if (commentForm.valid) {
      this.userservice.addComment(this.comment).subscribe((resultMode: ResultModel) => {
        if (resultMode.code > 0) {
          // success TODO
          this.comment.clear();
          return;
        }
        // fail TODO
      })
    }
  }
}

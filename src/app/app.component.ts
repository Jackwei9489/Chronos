import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserService} from './service/UserService';
import {Comment} from './models/Comment';
import {ResultModel} from './models/ResultModel';
import {Member} from './models/Member';
import {Schedule} from './models/Schedule';
import {MdDialog} from '@angular/material';
import {SuccessDialogComponent} from './pages/dialog/SuccessDialog';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  opened = false;
  clicked = false;
  submitted = false;
  comment: Comment = new Comment('', '', '');
  team: Array<Member> = [];
  schedule: Schedule[] = [];

  nextPage() {
    $.fn.fullpage.moveSectionDown();
  }

  constructor(private userservice: UserService, public dialog: MdDialog) {
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
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', 'black', '#FFFFFF', '#FFFFFF'],
      anchors: ['Home', 'Science', 'Art', 'Project', 'Team', 'Message'],
      menu: '.navbr'
    });
  }

  openMenu() {
    this.opened = !this.opened;
  }

  show() {
    if (this.schedule.length === 0) {
      this.clicked = !this.clicked;
      this.userservice.fetchSchedule().subscribe((resultModel: ResultModel) => {
        if (resultModel.code > 0) {
          this.schedule = resultModel.model;
        }
      });
    } else {
      this.clicked = !this.clicked;
    }
  }

  addComment(commentForm) {
    this.submitted = true;
    if (commentForm.valid) {
      this.userservice.addComment(this.comment).subscribe((resultMode: ResultModel) => {
        this.submitted = false;
        if (resultMode.code > 0) {
          // success TODO
          this.comment.message = this.comment.email = this.comment.name = '';
          this.dialog.open(SuccessDialogComponent, {
            data: '提交成功!'
          });
          return;
        }
        this.dialog.open(SuccessDialogComponent, {
          data: '提交失败!'
        });
      })
    }
  }
}

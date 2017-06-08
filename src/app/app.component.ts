import {AfterViewInit, Component} from '@angular/core';

declare let $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  opened = false;
  ngAfterViewInit(): void {
    $('#dowebok').fullpage({
      sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF'],
      anchors: ['Home', 'Science', 'Illustration', 'Music', 'Artical', 'About'],
      menu: '.navbr'
    });
  }

  openMenu () {
    console.log(123);
    this.opened = !this.opened;
  }

  nextPage () {
    $.fn.fullpage.moveSectionDown();
  }
}

import {Component, Inject, Input} from '@angular/core'
import {MD_DIALOG_DATA} from '@angular/material';
/**
 * Created by wz on 2017/6/14.
 */

@Component({
  selector: 'app-success-dialog',
  templateUrl: 'app-success-dialog.html',
})
export class SuccessDialogComponent {
  constructor(@Inject(MD_DIALOG_DATA) public data: any) {}
}

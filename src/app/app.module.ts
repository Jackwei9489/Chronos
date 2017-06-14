import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {UserService} from './service/UserService';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule, MdDialog, MdNativeDateModule} from '@angular/material';
import {SuccessDialogComponent} from './pages/dialog/SuccessDialog';

@NgModule({
  declarations: [
    AppComponent,
    SuccessDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdNativeDateModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent, SuccessDialogComponent]
})
export class AppModule {
}

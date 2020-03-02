import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Body } from './body/body.component';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: Body },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    Body
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


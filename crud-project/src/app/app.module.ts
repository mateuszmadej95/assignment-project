import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TabMenuComponent } from './tab-menu/tab-menu.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
  ],
  declarations: [
    AppComponent,
    TabMenuComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

import { TabMenuComponent } from '../tab-menu/tab-menu.component'

@NgModule({
  declarations: [
    TabMenuComponent
  ],
  imports: [
    MenuModule,
    TabMenuModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TabMenuComponent,
  ]
})

export class CommonsModule { }

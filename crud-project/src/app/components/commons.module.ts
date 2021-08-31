import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';

import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TabMenuComponent,
    FormComponent,
    TableComponent
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
    FormComponent,
    TableComponent
  ]
})

export class CommonsModule { }

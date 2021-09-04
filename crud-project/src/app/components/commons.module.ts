import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { FirebaseApiService } from '../api/firebase-api.service';

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
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    TabMenuComponent,
    FormComponent,
    TableComponent
  ],
  providers: [
    FirebaseApiService
  ]
})

export class CommonsModule { }

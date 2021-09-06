import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

import { TabMenuComponent } from './tab-menu/tab-menu.component';
import { FormComponent } from './form/form.component';
import { TableComponent } from './table/table.component';
import { JsonApiService } from 'src/ProjectApi/json-api.service';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { RouterRecordComponent } from './router-record/router-record.component';
import { RouterRecordService } from './router-record/router-record.service';
import { AuthorComponent } from './author/author.component';

const primeNgModules = [
  TabMenuModule,
  TableModule,
  ButtonModule,
  InputTextModule,
  DialogModule
];

@NgModule({
  declarations: [
    TabMenuComponent,
    FormComponent,
    TableComponent,
    ItemDetailsComponent,
    RouterRecordComponent,
    AuthorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ...primeNgModules
  ],
  exports: [
    TabMenuComponent,
    FormComponent,
    TableComponent,
    RouterRecordComponent
  ],
  providers: [
    JsonApiService,
    RouterRecordService
  ]
})

export class CommonsModule { }

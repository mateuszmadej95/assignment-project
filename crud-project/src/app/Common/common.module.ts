import { NgModule } from '@angular/core';
import { Button } from 'primeng/button';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';


@NgModule({
  imports: [
    CommonModule,
    Button,
    TabMenuModule,
    MenuModule
  ],
  exports: [
    CommonModule,
    Button,
    TabMenuModule,
    MenuModule,

  ]
})
export class CommonModule { }

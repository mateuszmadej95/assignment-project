import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit {

  public items: MenuItem[] = [];
  public activeItem: MenuItem;

  constructor() { }

  public ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      { label: 'Table', icon: 'pi pi-fw pi-calendar', routerLink: ['/table'] },
      { label: 'Form', icon: 'pi pi-fw pi-file', routerLink: ['/form'] }
    ];

    this.activeItem = this.items[0];
  }

}

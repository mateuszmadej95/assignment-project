import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tab-menu',
  templateUrl: './tab-menu.component.html',
  styleUrls: ['./tab-menu.component.scss']
})
export class TabMenuComponent implements OnInit, OnDestroy {

  public items: MenuItem[] = [];
  public activeItem: MenuItem;

  private routerSub: Subscription;

  constructor(private readonly router: Router) { }

  public ngOnInit(): void {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
      { label: 'Table', icon: 'pi pi-fw pi-calendar', routerLink: ['/table'], title: 'table' },
      { label: 'Form', icon: 'pi pi-fw pi-file', routerLink: ['/form'], title: 'form' }
    ];

    this.activeItem = this.items[0];

    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        const url = event.url;
        this.setActiveLinkItem(url);
      })
    ).subscribe();
  }

  public ngOnDestroy(): void {
    this.routerSub.unsubscribe();
  }

  private setActiveLinkItem(url: string) {
    this.activeItem = this.items.find(item => url.includes(item?.title)) || this.items[0];
  }

}

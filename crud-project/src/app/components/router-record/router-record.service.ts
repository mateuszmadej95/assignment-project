import { Injectable, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouterRecordService implements OnInit {

  public routerRecord$: Observable<string[]>;

  private routerRecord: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private routerSub: Subscription;
  private ROUTER_RECORDS_LIMIT = 15;

  constructor(private readonly router: Router) {
    this.routerRecord$ = this.routerRecord.asObservable();
  }

  public ngOnInit(): void {

  }
  public startListeningToRouter(): void {
    this.routerSub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap(event => {
        let currentRouterRecord = this.routerRecord.getValue();
        if(currentRouterRecord.length === this.ROUTER_RECORDS_LIMIT) {
          currentRouterRecord = this.getRecordsWithoutLast();
        };
        const eventUrl = (event as NavigationEnd).url;
        this.routerRecord.next([eventUrl, ...currentRouterRecord]);
      })
    ).subscribe();
  }

  public stopListeningToRouter(): void {
    this.routerSub.unsubscribe();
  }

  private getRecordsWithoutLast(): string[] {
    const currentRouterRecord = this.routerRecord.getValue();
    currentRouterRecord.pop();
    return currentRouterRecord;
  }

}

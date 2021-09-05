import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RouterRecordService } from 'src/app/components/router-record/router-record.service';

@Component({
  selector: 'app-router-record',
  templateUrl: './router-record.component.html',
  styleUrls: ['./router-record.component.scss']
})
export class RouterRecordComponent implements OnInit, OnDestroy {

  public routerRecords: string[];
  public displayBasic: boolean;

  private subscriptionSink: Subscription[] = [];

  constructor(
    private readonly routerRecordService: RouterRecordService,
    private readonly router: Router
    ) {}

  public ngOnInit(): void {
    this.routerRecordService.startListeningToRouter();
    this.subscriptionSink.push(this.routerRecordService.routerRecord$.subscribe(records => {
      this.routerRecords = records;
    }));

    this.subscriptionSink.push(this.router.events.subscribe(() => this.displayBasic = false))
  }

  public ngOnDestroy(): void {
    this.routerRecordService.stopListeningToRouter();
    this.subscriptionSink.forEach(sub => sub.unsubscribe());
  }

  public convertToRouterName(routerLink: string): string {
    switch (routerLink) {
      case '/':
        return 'Home Page';
      case '/table':
        return 'Table';
      case '/form':
        return 'Create';
    
      default:
        return routerLink
    }
  }
  
  public showBasicDialog() {
    this.displayBasic = true;
}

}

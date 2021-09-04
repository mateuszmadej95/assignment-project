import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TableItem } from 'src/app/interfaces/table-item';
import { JsonApiService } from 'src/ProjectApi/json-api.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit, OnDestroy {

  public item$: Observable<TableItem>;
  public item: TableItem;

  private subscriptionSink: Subscription[] = [];
  private itemId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly jsonApiService: JsonApiService
    ) { }

  public ngOnInit(): void {
    this.subscriptionSink.push(this.route.params.pipe(
      tap(params => {
        this.itemId = params.itemId;
      })
    ).subscribe());

    this.subscriptionSink.push(this.jsonApiService.getTableItem(this.itemId).subscribe(item =>{
      this.item = item;
    }));
  }

  public ngOnDestroy(): void {
    this.subscriptionSink.forEach(sub => sub.unsubscribe());
  };

  public navigateBack(): void {
    this.router.navigate(['/table']);
  };

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { JsonApiService } from 'src/ProjectApi/json-api.service';
import { TableItem } from '../../interfaces/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  public tableItems$: Observable<TableItem[]>;

  private subscriptionSink: Subscription[] = [];

  constructor(
    private readonly jsonApiService: JsonApiService,
    private readonly router: Router,
    private readonly route: ActivatedRoute
    ) { }

  public ngOnInit(): void {
    this.tableItems$ = this.jsonApiService.getAllTableItems();
  }

  public ngOnDestroy(): void {
    this.subscriptionSink.forEach(sub => sub.unsubscribe());
  }

  public onRemoveTableItem(item: TableItem): void {
    this.subscriptionSink.push(this.jsonApiService.removeTableItem(item).subscribe());
  }

  public navigateToItem(id: string): void {
    this.router.navigate([id], { relativeTo: this.route });
  }

  public navigateToAuthor(authorName: string): void {
    this.router.navigate(['authors', authorName], { relativeTo: this.route });
  }
}

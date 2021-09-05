import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TableItem } from 'src/app/interfaces/table-item';
import { JsonApiService } from 'src/ProjectApi/json-api.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit, OnDestroy {

  public items: TableItem[];
  public authorName: string;

  private subscriptionSink: Subscription[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly jsonApiService: JsonApiService
    ) { }

  public ngOnInit(): void {
    this.subscriptionSink.push(this.route.params.pipe(
      tap(params => {
        this.authorName = params.authorName;
      })
    ).subscribe());

    this.subscriptionSink.push(this.jsonApiService.getAuthorItems(this.authorName).pipe(
      tap(items => this.items = items)
    ).subscribe());
  }

  public ngOnDestroy(): void {
    this.subscriptionSink.forEach(sub => sub.unsubscribe());
  };

  public navigateBack(): void {
    this.router.navigate(['/table']);
  };
}

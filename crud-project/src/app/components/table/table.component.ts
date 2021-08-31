import { Component, OnInit } from '@angular/core';
import { TableItem } from '../../interfaces/table-item';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public tableItems: TableItem[] = [
    { id: '1', author: 'Jon Doe', title: 'First one' },
    { id: '2', author: 'Jane Doe', title: 'Sec one' },
    { id: '3', author: 'Jane Doe', title: 'Third one' },
    { id: '4', author: 'Jon Doe', title: '4th one' },
    { id: '5', author: 'Jon Doe', title: '5th one' },
  ]
  public columns = [{ prop: 'id' }, { name: 'author' }, { name: 'title' }];

  constructor() { }

  ngOnInit() {
  }

}

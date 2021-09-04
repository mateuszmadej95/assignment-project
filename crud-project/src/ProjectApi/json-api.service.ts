import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TableItem } from 'src/app/interfaces/table-item';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  private BASE_API_URL = environment.baseApiUrl;

  constructor(private readonly http: HttpClient) { }

  public getAllTableItems(): Observable<TableItem[]> {
    return this.http.get<TableItem[]>(`${this.BASE_API_URL}/posts`);
  }

  public getTableItem(id: string): Observable<TableItem> {
    return this.http.get<TableItem>(`${this.BASE_API_URL}/posts/${id}`);
  }

  public removeTableItem(item: TableItem) {
    console.log('removing', item)
    return this.http.delete<TableItem>(`${this.BASE_API_URL}/posts/${item.id}`);
  }

  public addTableItem(item: TableItem) {
    return this.http.post<TableItem[]>(`${this.BASE_API_URL}/posts`, item);
  }

}

import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const requestOptions = {
  headers: new HttpHeaders({
    ContentType: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  searchRepoEndPoint = 'repositories';
  query = '?q=created:>';
  params = '&sort=stars&order=desc';
  pageParam = '&page=';

  constructor(private httpClient: HttpClient) {}

  getRecentRepos(createdAfter: string, pageNumber?: number): Observable<any> {
    return this.httpClient.get<any>(
      environment.searchApi +
        this.searchRepoEndPoint +
        this.query +
        createdAfter +
        this.params +
        this.pageParam +
        pageNumber,
      requestOptions
    );
  }
}

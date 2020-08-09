import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const requestOptions = {
  headers: new HttpHeaders({
    ContentType: 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ReposService {
  apiServer = 'https://api.github.com';
  searchRepoEndPoint = '/search/repositories';
  query = '?q=created:>';
  params = '&sort=stars&order=desc';
  pageParam = '&page=';

  constructor(private httpClient: HttpClient) {}

  getRecentRepos(createdAfter: string, pageNumber?: number): Observable<any> {
    pageNumber = pageNumber ? pageNumber : 1;

    return this.httpClient.get<any>(
      this.apiServer +
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

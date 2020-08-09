import { TestBed, async, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ReposService } from './repos.service';

describe('ReposService', () => {
  let httpTestingController: HttpTestingController;
  let service: ReposService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReposService],
      imports: [HttpClientTestingModule],
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(ReposService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all data', async(
    inject(
      [HttpTestingController, ReposService],
      (httpClient: HttpTestingController, reposService: ReposService) => {
        const repos = [
          {
            repoId: 1,
            repoName: 'name-one',
          },
          {
            repoId: 2,
            repoName: 'name-two',
          },
          {
            repoId: 3,
            repoName: 'name-three',
          },
        ];

        reposService.getRecentRepos('').subscribe((repos: any) => {
          expect(repos.length).toBe(3);
        });

        let req = httpTestingController.expectOne(
          'https://api.github.com/search/repositories?q=created:>&sort=stars&order=desc&page=1'
        );
        expect(req.request.method).toBe('GET');
        req.flush(repos);
        httpTestingController.verify();
      }
    )
  ));
});

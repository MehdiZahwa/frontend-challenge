import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';
import { Repository } from 'src/app/models/repository';
import { Result } from 'src/app/models/result';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  sysDate = new Date();
  lastMonthDate: string;
  jsonResult: Result;
  repositories: Array<Repository> = [];

  pageNumber: number = 1;

  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    this.lastMonthDate =
      this.sysDate.getFullYear().toString() +
      '-0' +
      this.sysDate.getMonth().toString() +
      '-' +
      this.sysDate.getDate().toString();

    this.getRecentRepos(this.lastMonthDate);

    setInterval(() => {
      this.sysDate = new Date();
    }, 1);
  }

  getRecentRepos(date: string, page = 1) {
    this.reposService.getRecentRepos(date, page).subscribe((value) => {
      if (value) {
        this.jsonResult = value;
        this.jsonResult.items.forEach((item) => {
          this.repositories.push(item);
        });
      }
    });
  }

  calculateDateDiff(submitDate: Date) {
    submitDate = new Date(submitDate);
    return Math.floor(
      (this.sysDate.getTime() - submitDate.getTime()) / (1000 * 60 * 60 * 24)
    );
  }

  onScrollDown() {
    console.log('scrolled !');
    this.getRecentRepos(this.lastMonthDate, ++this.pageNumber);
  }
}

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
  lastMonth: string;
  jsonResult: Result;
  repositories: Array<Repository> = [];
  totalRepositories: Array<Repository> = [];

  pageNumber: number = 1;

  constructor(private reposService: ReposService) {}

  ngOnInit(): void {
    this.lastMonth =
      this.sysDate.getFullYear().toString() +
      '-0' +
      this.sysDate.getMonth().toString() +
      '-' +
      this.sysDate.getDate().toString();
    //console.log(this.lastMonth);
    console.log(this.getRecentRepos(this.lastMonth));
    //console.log(this.sysDate.getMonth().toString());
    //console.log(this.sysDate.getFullYear().toString());
    //console.log(this.sysDate.getDate().toString());
    setInterval(() => {
      this.sysDate = new Date();
    }, 1);
  }

  getRecentRepos(date: string, page?: number) {
    this.reposService.getRecentRepos(date, page).subscribe((value) => {
      this.jsonResult = value;
      this.jsonResult.items.forEach((item) => {
        this.totalRepositories.push(item);
      });
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
    this.getRecentRepos(this.lastMonth, ++this.pageNumber);
  }
}

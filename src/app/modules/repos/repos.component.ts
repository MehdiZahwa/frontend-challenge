import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/services/repos.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss'],
})
export class ReposComponent implements OnInit {
  sysDate = new Date();
  lastMonth: string;

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
  }

  getRecentRepos(date: string, page?: number) {
    this.reposService.getRecentRepos(date).subscribe((value) => {
      console.log(value);
    });
  }
}

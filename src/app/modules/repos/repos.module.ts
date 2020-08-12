import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';
import { ShortNumberPipe } from 'src/app/pipes/short-number.pipe';

@NgModule({
  declarations: [ReposComponent, ShortNumberPipe],
  imports: [
    CommonModule,
    ReposRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    InfiniteScrollModule,
    MatChipsModule,
    MatDividerModule,
  ],
})
export class ReposModule {}

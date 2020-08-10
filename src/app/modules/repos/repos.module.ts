import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';

@NgModule({
  declarations: [ReposComponent],
  imports: [
    CommonModule,
    ReposRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
  ],
})
export class ReposModule {}

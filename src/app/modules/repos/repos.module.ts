import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos.component';

@NgModule({
  declarations: [ReposComponent],
  imports: [CommonModule, ReposRoutingModule, MatCardModule],
})
export class ReposModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReposComponent } from './repos.component';

const routes: Routes = [{ path: '', component: ReposComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }

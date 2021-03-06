import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './shared/no-page-found/no-page-found.component';
import { ReposComponent } from './modules/repos/repos.component';

const routes: Routes = [
  {
    path: '',
    component: ReposComponent,
    children: [
      {
        path: 'repos',
        loadChildren: () =>
          import('./modules/repos/repos.module').then((m) => m.ReposModule),
      },
    ],
  },
  {
    path: '**',
    component: NoPageFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

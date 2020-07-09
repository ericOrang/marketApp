import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesPage } from './pages.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PagesPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'like',
        loadChildren: () =>
          import('./like/like.module').then((m) => m.LikePageModule),
      },
      {
        path: 'new',
        loadChildren: () =>
          import('./new/new.module').then((m) => m.NewPageModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('./message/message.module').then((m) => m.MessagePageModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesPageRoutingModule {}

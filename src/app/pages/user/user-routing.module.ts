import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module')
      .then(m => m.ProfileModule),
  },
  {
    path: 'movie',
    loadChildren: () => import('./movie/movie.module')
      .then(m => m.MovieModule),
  },
  { path: '', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

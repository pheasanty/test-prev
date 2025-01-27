import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import TutorlistPage from './tutorlist/tutorlist.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.page').then(m => m.MainPage)
  },
  {
    path: 'tutorlist',
    component: TutorlistPage
  },
  {
    path: 'bookinglist',
    loadChildren: () => import('./bookinglist/bookinglist.page').then(m => m.BookinglistPage)
  },
  {
    path: 'userslist',
    loadChildren: () => import('./userslist/userslist.page').then(m => m.UserslistPage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

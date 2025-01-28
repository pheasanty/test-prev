import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },
  {
    path: 'tutorlist',
    loadComponent: () => import('./tutorlist/tutorlist.page').then(m => m.TutorlistPage)
  },
  {
    path: 'userslist',
    loadComponent: () => import('./userslist/userslist.page').then(m => m.UserslistPage)
  },
  {
    path: 'bookinglist',
    loadComponent: () => import('./bookinglist/bookinglist.page').then(m => m.BookinglistPage)
  }
];
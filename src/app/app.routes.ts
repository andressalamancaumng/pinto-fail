import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'reserva',
    loadComponent: () => import('./reserva/reserva.page').then((m) => m.ReservaPage),
  },
  {
    path: '',
    redirectTo: 'reserva',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: 'solicitud',
    loadComponent: () => import('./solicitud/solicitud.page').then( m => m.SolicitudPage)
  },
  {
    path: 'reserva',
    loadComponent: () => import('./reserva/reserva.page').then( m => m.ReservaPage)
  },
  {
    path: 'resena',
    loadComponent: () => import('./resena/resena.page').then( m => m.ResenaPage)
  },
];

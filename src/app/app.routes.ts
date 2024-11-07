import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'listar-mascotas',
    loadComponent: () => import('./pages/listar-mascotas/listar-mascotas.page').then( m => m.ListarMascotasPage)
  },

];

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'home',
=======
    redirectTo: 'login',
>>>>>>> 2886ce30bcb35fb04dfdfae404625d75bb23f5d2
    pathMatch: 'full',
  },
  {
    path: 'animal-form',
    loadComponent: () => import('./animal-form/animal-form.page').then( m => m.AnimalFormPage)
  },
  {
    path: 'listar-mascotas',
    loadComponent: () => import('./pages/listar-mascotas/listar-mascotas.page').then( m => m.ListarMascotasPage)
  },
<<<<<<< HEAD
=======
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },


>>>>>>> 2886ce30bcb35fb04dfdfae404625d75bb23f5d2

];

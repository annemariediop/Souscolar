import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},

  {
    path: 'registerparent',
    loadChildren: () => import('./registerparent/registerparent.module').then( m => m.RegisterparentPageModule)
  },
 
  {
    path: 'confidentialite',
    loadChildren: () => import('./confidentialite/confidentialite.module').then( m => m.ConfidentialitePageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'home1',
    loadChildren: () => import('./home1/home1.module').then( m => m.Home1PageModule)
  },
  {
    path: 'verify-email',
    loadChildren: () => import('./verify-email/verify-email.module').then( m => m.VerifyEmailPageModule)
  },
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

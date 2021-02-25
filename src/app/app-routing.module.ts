import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: './areas/accueil/accueil.module#AccueilModule'
  },
  {
    path: 'index',
    loadChildren: './areas/accueil/accueil.module#AccueilModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

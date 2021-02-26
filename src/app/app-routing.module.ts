import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },
  {
    path: 'index',
    loadChildren: () => import('./areas/accueil/accueil.module').then(m => m.AccueilModule)
  },
  {
    path: 'collection',
    loadChildren: () => import('./areas/collection/collection.module').then(m => m.CollectionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

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
  },
  {
    path: 'settings',
    loadChildren: () => import('./areas/settings/settings.module').then(m => m.SettingsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }

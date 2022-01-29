import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/makes', pathMatch: 'full' },
  {
    path: 'makes',
    loadChildren: () => import('./pages/makes/makes.module').then((m) => m.MakesModule),
  },
  { path: '**', redirectTo: '/makes', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakesComponent } from './components/makes/makes.component';
import { ModelsComponent } from './components/models/models.component';
import { VehicleTypesComponent } from './components/vehicle-types/vehicle-types.component';

const makesRoutes: Routes = [
  {
    path: '',
    component: MakesComponent,
    children: [
      { path: 'models', component: ModelsComponent },
      { path: 'vehicle-types', component: VehicleTypesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(makesRoutes)],
  exports: [RouterModule],
})
export class MakesRoutingModule {}

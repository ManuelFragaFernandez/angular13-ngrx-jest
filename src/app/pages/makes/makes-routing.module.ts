import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakesComponent } from './makes.component';
import { ModelsComponent } from './models/models.component';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';

const makesRoutes: Routes = [
	{
		path: '',
		component: MakesComponent,
		children: [
			{ path: '', component: ModelsComponent },
			{ path: '', component: VehicleTypesComponent },
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(makesRoutes)],
	exports: [RouterModule],
})
export class MakesRoutingModule {}

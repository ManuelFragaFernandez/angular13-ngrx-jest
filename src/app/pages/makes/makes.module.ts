import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypesComponent } from './vehicle-types/vehicle-types.component';
import { ModelsComponent } from './models/models.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MakesComponent } from './makes.component';
import { MakesRoutingModule } from './makes-routing.module';

@NgModule({
	declarations: [MakesComponent, VehicleTypesComponent, ModelsComponent],
	imports: [MakesRoutingModule, CommonModule, SharedModule],
})
export class MakesModule {}

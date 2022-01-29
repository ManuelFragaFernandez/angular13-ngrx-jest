import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTypesComponent } from './components/vehicle-types/vehicle-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MakesRoutingModule } from './makes-routing.module';
import { MakesComponent } from './components/makes/makes.component';
import { ModelsComponent } from './components/models/models.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [MakesComponent, VehicleTypesComponent, ModelsComponent],
  imports: [MakesRoutingModule, CommonModule, SharedModule, InfiniteScrollModule],
})
export class MakesModule {}

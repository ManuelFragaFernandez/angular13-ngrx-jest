import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { UtilsService } from './services/utils.service';
import { CardComponent } from './components/card/card.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const MATERIAL_MODULES = [MatSnackBarModule, MatButtonModule, MatCardModule];

@NgModule({
  declarations: [
    HeaderComponent,
    CardComponent
  ],
  imports: [
    MATERIAL_MODULES,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    CardComponent
  ],
  providers: [
    UtilsService
  ]
})
export class SharedModule { }

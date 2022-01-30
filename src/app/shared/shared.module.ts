import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { UtilsService } from './services/utils.service';
import { CardComponent } from './components/card/card.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardListComponent } from './components/card-list/card-list.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const MATERIAL_MODULES = [MatSnackBarModule, MatButtonModule, MatCardModule];

@NgModule({
  declarations: [HeaderComponent, CardComponent, CardListComponent],
  imports: [MATERIAL_MODULES, CommonModule, InfiniteScrollModule],
  exports: [HeaderComponent, CardComponent, CardListComponent],
  providers: [UtilsService],
})
export class SharedModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { HomesRoutingModule } from './homes-routing.module';
import { HomesComponent } from './homes/homes.component';

@NgModule({
  declarations: [
    HomesComponent
  ],
  imports: [
    CommonModule,
    HomesRoutingModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule

  ]
})
export class HomesModule { }

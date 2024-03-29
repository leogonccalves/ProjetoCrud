import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomesComponent } from './homes/homes.component';

const routes: Routes = [ { path: '', component: HomesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomesRoutingModule { }

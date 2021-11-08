import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventariofisicoComponent } from './inventariofisico.component';
import { RouterModule } from '@angular/router';
import { routes } from './inventariofisico-routing.module';


@NgModule({
  declarations: [
    InventariofisicoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class InventariofisicoModule { }

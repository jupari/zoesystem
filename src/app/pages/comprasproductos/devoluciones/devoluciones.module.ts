import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevolucionesComponent } from './devoluciones.component';
import { RouterModule } from '@angular/router';
import { routes } from './devoluciones-routing.module';


@NgModule({
  declarations: [
    DevolucionesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DevolucionesModule { }

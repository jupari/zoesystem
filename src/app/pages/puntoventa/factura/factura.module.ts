import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './factura-routing.module';

import { FacturaComponent } from './factura.component';
import { MatFuseModule } from 'app/common/matfuse/matfuse.module';
import { componentesModule } from 'app/pages/componentes/componentes.module';


@NgModule({
  declarations: [
    FacturaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    componentesModule,
    MatFuseModule
  ],
  exports:[
    RouterModule
  ]

})
export class FacturaModule { }

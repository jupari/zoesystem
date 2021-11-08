import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacturaComponent } from './factura.component';
import { RouterModule } from '@angular/router';
import { routes } from './factura-routing.module';



@NgModule({
  declarations: [
    FacturaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]

})
export class FacturaModule { }

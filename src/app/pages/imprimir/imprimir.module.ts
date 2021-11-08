import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaventasComponent } from './consultaventas/consultaventas.component';
import { RouterModule } from '@angular/router';
import { routes } from './imprimir-routing.module';


@NgModule({
  declarations: [
    ConsultaventasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ImprimirModule { }

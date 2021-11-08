import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreacionproductoComponent } from './creacionproducto.component';
import { RouterModule } from '@angular/router';
import { routes } from './creacionproducto-routing.module';


@NgModule({
  declarations: [
    CreacionproductoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CreacionproductoModule { }

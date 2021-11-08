import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DocinventariosComponent } from './docinventarios.component';
import { RouterModule } from '@angular/router';
import { routes } from './docinventarios-routing.module';


@NgModule({
  declarations: [
    DocinventariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class DocinventariosModule { }

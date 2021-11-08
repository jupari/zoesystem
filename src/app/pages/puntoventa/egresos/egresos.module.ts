import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { EgresosComponent } from './egresos.component';
import { routes } from './egresos-routing.module';



@NgModule({
  declarations: [
    EgresosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class EgresosModule { }

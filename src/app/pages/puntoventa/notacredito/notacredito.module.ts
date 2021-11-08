import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { NotacreditoComponent } from './notacredito.component';
import { RouterModule } from '@angular/router';
import { routes } from './notacredito-routing.module';



@NgModule({
  declarations: [
    NotacreditoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class NotacreditoModule { }

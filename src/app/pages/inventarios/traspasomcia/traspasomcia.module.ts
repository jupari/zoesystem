import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { TraspasomciaComponent } from './traspasomcia.component';
import { RouterModule } from '@angular/router';
import { routes } from './traspasomcia-routing.module';


@NgModule({
  declarations: [
    TraspasomciaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class TraspasomciaModule { }

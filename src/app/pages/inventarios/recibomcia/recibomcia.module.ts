import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecibomciaComponent } from './recibomcia.component';
import { RouterModule } from '@angular/router';
import { routes } from './recibomcia-routing.module';


@NgModule({
  declarations: [
    RecibomciaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class RecibomciaModule { }

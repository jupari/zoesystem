import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComprasComponent } from './compras.component';
import { RouterModule } from '@angular/router';
import { routes } from './compras-routing.module';



@NgModule({
  declarations: [
    ComprasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ],
  exports:[
    RouterModule
  ]
})
export class ComprasModule { }

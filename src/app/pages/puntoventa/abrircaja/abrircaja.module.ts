import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbrircajaComponent } from './abrircaja.component';
import { RouterModule } from '@angular/router';
import { routes } from './abrircaja-routing.module';


@NgModule({
  declarations: [
    AbrircajaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ],
  exports:[
    RouterModule
  ]

})
export class AbrircajaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CerrarcajaComponent } from './cerrarcaja.component';
import {  RouterModule } from '@angular/router';
import { routes } from './cerrarcaja-routing.module';





@NgModule({
  declarations: [
    CerrarcajaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class CerrarcajaModule { }

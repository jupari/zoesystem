import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldosinventarioComponent } from './saldosinventario.component';
import { RouterModule } from '@angular/router';
import { routes } from './saldosinventario-routing.module';


@NgModule({
  declarations: [
    SaldosinventarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class SaldosinventarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { RecogerComponent } from './recoger.component';
import { RouterModule } from '@angular/router';
import { routes } from './recoger-routing.module';


@NgModule({
  declarations: [
    RecogerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule
  ]
})
export class RecogerModule { }

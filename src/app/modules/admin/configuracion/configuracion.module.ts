import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ReactiveFormsModule} from '@angular/forms';

import { ConfiguracionRoutingModule } from './configuracion-routing.module';
import { CuentaComponent } from './cuenta/cuenta.component';


@NgModule({
  declarations: [
    CuentaComponent
  ],
  imports: [
    CommonModule,
    ConfiguracionRoutingModule,
    ReactiveFormsModule    
  ]
})
export class ConfiguracionModule {}

 

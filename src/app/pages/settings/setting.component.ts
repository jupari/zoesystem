import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
})
export class SettingComponent implements OnInit {

  //planBillingForm: FormGroup;
  planBillingForm:FormGroup;
  plans: any[];


  constructor(private _formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.planBillingForm = this._formBuilder.group({
      plan          : ['team'],
      cardHolder    : ['Brian Hughes'],
      cardNumber    : [''],
      cardExpiration: [''],
      cardCVC       : [''],
      country       : ['usa'],
      zip           : ['']
    });

    this.plans = [
      {
          value  : 'sucursal',
          label  : 'SUCURSAL',
          details: 'Sucursal del punto de Venta',
          price  : '10'
      },
      {
          value  : 'tipdoc',
          label  : 'TIPOS DE DOCUMENTO',
          details: 'Tipos de Documentos del sistema',
          price  : '20'
      },
      {
          value  : 'cajero',
          label  : 'CAJEROS',
          details: 'Cajeros que facturan en el sistema',
          price  : '40'
      },
      {
        value  : 'caja',
        label  : 'CAJA',
        details: 'Defina el codigo de la caja',
        price  : '40'
      },
      {
        value  : 'configtpv',
        label  : 'CONFIGURACION TPV',
        details: 'Configure a que sucursal pertenece la caja',
        price  : '40'
      },
      {
        value  : 'vendedor',
        label  : 'VENDEDORES',
        details: 'Defina los Vendedores del sistema',
        price  : '40'
    },
    {
      value  : 'tiketepos',
      label  : 'TICKETE POS',
      details: 'Configure lo que va a salir en la impresión de la tirilla',
      price  : '40'
    },
   
  ];
  }

  trackByFn(index: number, item: any): any
  {
      return item.id || index;
  }

}

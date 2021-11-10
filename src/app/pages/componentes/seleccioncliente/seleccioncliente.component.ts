import { Component, OnInit } from '@angular/core';
import { NgSelectModule,NgOption } from '@ng-select/ng-select';
import {FormControl, FormGroup, ReactiveFormsModule, FormsModule} from '@angular/forms';

@Component({
  selector: 'app-seleccioncliente',
  templateUrl: './seleccioncliente.component.html',
  styleUrls: ['./seleccioncliente.component.scss']
})
export class SeleccionclienteComponent implements OnInit {

  selectedAccounts = ['Michael'];
  accounts = [
      { name: `Jill`, email: 'jill@email.com', age: 15, country: undefined, child: { state: 'Active' } },
      { name: `Jill`, email: 'jill@email.com', age: 15, country: undefined, child: { state: 'Active' } },
      { name: 'Henry', email: 'henry@email.com', age: 10, country: undefined, child: { state: 'Active' } },
      { name: 'Meg', email: 'meg@email.com', age: 7, country: null, child: { state: 'Active' } },
      { name: 'Adam', email: 'adam@email.com', age: 12, country: 'United States', child: { state: 'Active' } },
      { name: 'Homer', email: 'homer@email.com', age: 47, country: '', child: { state: 'Active' } },
      { name: 'Samantha', email: 'samantha@email.com', age: 30, country: 'United States', child: { state: 'Active' } },
      { name: 'Amalie', email: 'amalie@email.com', age: 12, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina', child: { state: 'Active' } },
      { name: 'Adrian', email: 'adrian@email.com', age: 21, country: 'Ecuador', child: { state: 'Active' } },
      { name: 'Wladimir', email: 'wladimir@email.com', age: 30, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Natasha', email: 'natasha@email.com', age: 54, country: 'Ecuador', child: { state: 'Inactive' } },
      { name: 'Nicole', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Michael', email: 'michael@email.com', age: 15, country: 'Colombia', child: { state: 'Inactive' } },
      { name: 'Nicolás', email: 'nicole@email.com', age: 43, country: 'Colombia', child: { state: 'Inactive' } }
  ];

  groupByFn = (item) => {
    console.log(item)
    return item.name
  };

  
  

  //groupValueFn = (_: string, children: any[]) => ({ name: children[0].name, total: children.length });
  groupValueFn = (_: string, children: any[]) => ({ name: 'Total', total:children.length });


  constructor() { }

  ngOnInit(): void {
  }

}

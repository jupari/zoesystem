import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consecutivo',
  templateUrl: './consecutivo.component.html',
  styleUrls: ['./consecutivo.component.scss']
})
export class ConsecutivoComponent implements OnInit {

  formFieldHelpers:string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

  getFormFieldHelpersAsString(): string
  {
    return this.formFieldHelpers.join(' ');
  }

}

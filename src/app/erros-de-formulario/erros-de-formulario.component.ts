import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'u-erros-de-formulario',
  templateUrl: './erros-de-formulario.component.html',
  styleUrls: ['./erros-de-formulario.component.css']
})
export class ErrosDeFormularioComponent implements OnInit {

  @Input() mensagem: string;
  constructor() { }

  ngOnInit() {
  }

}

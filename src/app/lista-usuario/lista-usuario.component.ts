import { Component, Input, OnInit } from '@angular/core';

import { Usuario } from '../model/usuario';

@Component({
  selector: 'u-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  @Input() public usuarios: Array<Usuario>;

  ngOnInit() {

  }

}

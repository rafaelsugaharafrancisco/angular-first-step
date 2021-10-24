import { Component, Input } from '@angular/core';

import { Usuario } from '../model/usuario';

@Component({
  selector: 'u-mostra-usuario',
  templateUrl: './mostra-usuario.component.html',
  styleUrls: ['./mostra-usuario.component.css']
})
export class MostraUsuarioComponent {

  @Input() usuario: Usuario;

}

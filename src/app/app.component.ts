import { Component } from '@angular/core';

import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public usuario = new Usuario();
  public usuarios = new Array<Usuario>();

  public exibirNovoUsuario($event): void {
    this.usuario = $event;
    this.usuarios.push($event);
    console.log(this.usuario);
  }
}

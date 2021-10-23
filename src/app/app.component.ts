import { Component } from '@angular/core';

import { Usuario } from './model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private usuario = new Usuario();

  public mostraUsuario($event): void {
    this.usuario = $event;
    console.log(this.usuario);
  }
}

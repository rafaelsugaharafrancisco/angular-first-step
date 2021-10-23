import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { UsuarioService } from "../service/usuario.service";
import { Usuario } from '../model/usuario';

@Component({
    selector: 'u-novo-usuario',
    templateUrl: './novo-usuario.component.html'
})
export class NovoUsuarioComponent {

    private usuario = new Usuario();

    constructor(private service: UsuarioService){}
    
    public cadastrar(): void {

        this.service.gravar(this.usuario).subscribe(resposta => console.log(resposta));
    }
}
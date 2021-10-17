import { Component } from "@angular/core";
import { FormGroup } from "@angular/forms";

import { UsuarioService } from "../service/usuario.service";

@Component({
    selector: 'u-novo-usuario',
    templateUrl: './novo-usuario.component.html'
})
export class NovoUsuarioComponent {

    usuario: any = {}

    constructor(private service: UsuarioService){}

    public cadastrar(form: FormGroup): void {
        this.service.gravar(this.usuario).subscribe(resposta => console.log('adicionado'));
    }
}
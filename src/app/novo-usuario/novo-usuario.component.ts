import { Component, EventEmitter, Output } from "@angular/core";

import { UsuarioService } from "../service/usuario.service";
import { Usuario } from '../model/usuario';

@Component({
    selector: 'u-novo-usuario',
    templateUrl: './novo-usuario.component.html'
})
export class NovoUsuarioComponent {

    private usuario = new Usuario();
    @Output() aoTransferir = new EventEmitter<Usuario>();

    constructor(private service: UsuarioService){};
    
    public cadastrar(): void {

        this.service.gravar(this.usuario).subscribe(resposta => {
            this.aoTransferir.emit(resposta);
            this.limparCampos();
        });
    }

    private limparCampos(): void {
        this.usuario.name = '';
        this.usuario.email = '';
        this.usuario.cpf = '';
        this.usuario.birthDate = new Date('');
    }
}
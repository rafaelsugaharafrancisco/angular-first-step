import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

import { UsuarioService } from "../service/usuario.service";
import { Usuario } from '../model/usuario';


@Component({
    selector: 'u-novo-usuario',
    templateUrl: './novo-usuario.component.html'
})
export class NovoUsuarioComponent {

    public usuario = new Usuario();

    @Output() aoCadastrar = new EventEmitter<string>();

    constructor(private service: UsuarioService, private router: Router){};

    public cadastrar(): void {
        this.service.gravar(this.usuario).subscribe(resposta => {
        this.aoCadastrar.emit(resposta.cpf);
        this.limparCampos();
        this.router.navigateByUrl(`mostrar-usuario/${ resposta.cpf }`);
        });
    }

    private limparCampos(): void {
        this.usuario.name = '';
        this.usuario.email = '';
        this.usuario.cpf = '';
        this.usuario.birthDate = new Date('');
    }
}

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { UsuarioService } from "../service/usuario.service";
import { Usuario } from '../model/usuario';
import { Erro } from "../model/erro";

@Component({
    selector: 'u-novo-usuario',
    templateUrl: './novo-usuario.component.html'
})
export class NovoUsuarioComponent implements OnInit {

    private usuario: Usuario;
    public usuarioForm: FormGroup;
    public erro: Array<Erro>;

//    @Output() aoCadastrar = new EventEmitter<string>();

    constructor(private service: UsuarioService,
      private router: Router,
      private formBuilder: FormBuilder){}

    ngOnInit(): void {
      this.usuarioForm = this.formBuilder.group({
        name:['', [Validators.required] ],
        email:['',[Validators.required, Validators.email] ],
        cpf:['', [Validators.required] ],
        birthDate:['', [Validators.required] ]
      });
    }

    public cadastrar(): void {
        this.usuario = this.usuarioForm.getRawValue() as Usuario;
        this.service.gravar(this.usuario).subscribe(resposta => {
          this.router.navigateByUrl(`mostrar-usuario/${ resposta.cpf }`);
        },
        httpError => {
          this.erro = httpError.error
        });
    }

    private limparCampos(): void {
        this.usuario.name = '';
        this.usuario.email = '';
        this.usuario.cpf = '';
        this.usuario.birthDate = new Date('');
    }
}

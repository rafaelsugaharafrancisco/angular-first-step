import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Erro } from '../model/erro';

import { Usuario } from '../model/usuario';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'u-mostra-usuario',
  templateUrl: './mostra-usuario.component.html',
  styleUrls: ['./mostra-usuario.component.css']
})
export class MostraUsuarioComponent implements OnInit {

//  @Input() usuario: Usuario;
  public usuario = new Usuario();
  public cpf: string;

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute){}

  ngOnInit(): void {

    this.route.params.subscribe(param => this.cpf = param['cpf']);

    this.usuarioService.pesquisarPorCpf(this.cpf).subscribe(resposta => {
      this.usuario = resposta;
    },
    (error => {
      this.usuario = null;
      console.error(error);
    }));
  }
}

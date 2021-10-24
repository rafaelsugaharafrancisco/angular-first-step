import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'u-pesquisa-usuario',
  templateUrl: './pesquisa-usuario.component.html',
  styleUrls: ['./pesquisa-usuario.component.css']
})
export class PesquisaUsuarioComponent implements OnInit {

  public cpf: string;
//  @Output() aoPesquisar = new EventEmitter<Usuario>();

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.cpf);
//      this.aoPesquisar.emit(resposta);
  }

  public pesquisar(): void {
    this.router.navigateByUrl(`mostrar-usuario/${ this.cpf }`)
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { BemVindoComponent } from './bem-vindo/bemvindo.component';
import { PesquisaUsuarioComponent } from './pesquisa-usuario/pesquisa-usuario.component';
import { MostraUsuarioComponent } from './mostra-usuario/mostra-usuario.component';

const routes: Routes = [
  { path: 'mostrar-usuario/:cpf', component: MostraUsuarioComponent },
  { path: 'pesquisar-usuario', component: PesquisaUsuarioComponent },
  { path: 'cadastrar-usuario', component: NovoUsuarioComponent },
  { path: 'bem-vindo', component: BemVindoComponent },
  { path: '', pathMatch: 'full', redirectTo: 'bem-vindo' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}

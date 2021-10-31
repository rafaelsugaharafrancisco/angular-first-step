import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import  localePt  from '@angular/common/locales/pt';

import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bemvindo.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioService } from './service/usuario.service';
import { MostraUsuarioComponent } from './mostra-usuario/mostra-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { PesquisaUsuarioComponent } from './pesquisa-usuario/pesquisa-usuario.component';

import { RoutingModule } from './app-routing.module';
import { SubtituloComponent } from './subtitulo/subtitulo.component';
import { ErrosDeFormularioComponent } from './erros-de-formulario/erros-de-formulario.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    NovoUsuarioComponent,
    MostraUsuarioComponent,
    ListaUsuarioComponent,
    PesquisaUsuarioComponent,
    SubtituloComponent,
      ErrosDeFormularioComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [UsuarioService,
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

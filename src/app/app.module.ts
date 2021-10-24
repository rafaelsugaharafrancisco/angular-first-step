import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bemvindo.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioService } from './service/usuario.service';
import { MostraUsuarioComponent } from './mostra-usuario/mostra-usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';


@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    NovoUsuarioComponent,
    MostraUsuarioComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BemVindoComponent } from './bem-vindo/bemvindo.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    NovoUsuarioComponent
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

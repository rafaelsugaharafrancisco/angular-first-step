import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../model/usuario';


@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    usersUrl = 'http://localhost:8080/users';

    constructor(private http: HttpClient){}

    public gravar(usuario: Usuario): any {
        return this.http.post(this.usersUrl, usuario);
    }
}
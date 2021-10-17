import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UsuarioService {
    usersUrl = 'http://localhost:8080/users';

    constructor(private http: HttpClient){}

    public gravar(contato: any): any {
        return this.http.post(this.usersUrl, contato);
    }
}
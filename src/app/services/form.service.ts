import { Injectable } from '@angular/core';
import { Pessoa} from "../models/pessoa";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8080/api/pessoas'; // URL do seu backend Spring

  constructor(private http: HttpClient) {
  }

  // Adiciona uma pessoa ao array de pessoas
  salvarPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.apiUrl, pessoa);
  }
  deletarPessoa(id: Number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.apiUrl);
  }

}

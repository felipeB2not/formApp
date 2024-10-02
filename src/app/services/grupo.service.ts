import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Grupo} from "../models/grupo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrupoService {

  constructor(private http: HttpClient) { }

  salvarGrupo(grupo: Grupo): Observable<Grupo>{
    return this.http.post<Grupo>('/api/grupos', grupo);
  }
  deletarGrupo(id: number): Observable<void> {
    return this.http.delete<void>(`/api/grupos/${id}`);
  }
}

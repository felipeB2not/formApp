import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meta } from '../models/meta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  private apiUrl = '/api/metas';

  constructor(private http: HttpClient) { }

  salvarMeta(meta: Meta): Observable<Meta> {
    return this.http.post<Meta>(this.apiUrl, meta);
  }

  deletarMeta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  listarMetas(): Observable<Meta[]> {
    return this.http.get<Meta[]>(this.apiUrl);
  }
}

import { Injectable } from '@angular/core';
import { Pessoa} from "../models/form";

@Injectable({
  providedIn: 'root'
})
export class FormService {
  pessoasForm: Pessoa[] = [];

  constructor() {}

  // Adiciona uma pessoa ao array de pessoas
  addPessoa(form: Pessoa): void {
    form.id = this.pessoasForm.length > 0 ? this.pessoasForm.length + 1 : 1;
    this.pessoasForm.push(form);
  }

  // Retorna o array de pessoas
  getPessoas(): Pessoa[] {
    return this.pessoasForm;
  }

  // Busca uma pessoa pelo ID
  getById(id: number): Pessoa | undefined {
    return this.pessoasForm.find((pessoa: Pessoa) => pessoa.id === id);
  }
}

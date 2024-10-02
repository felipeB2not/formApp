import { Component } from '@angular/core';
import {FormService} from "../services/form.service";
import {Router, RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {GrupoService} from "../services/grupo.service";
import {Pessoa} from "../models/pessoa";
import {Grupo} from "../models/grupo";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatCard, MatCardModule, MatCardTitle} from "@angular/material/card";
import {CommonModule, NgForOf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Necessário se o componente usar diretivas de roteamento
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export class GruposComponent {

  pessoas: Pessoa[] = [];

  grupo: Grupo = {
    id: 0,
    nome: '',
    descricao: '',
    pessoaid: 0
   };

  constructor(private _FormService: FormService, private _router: Router,  private _GrupoService: GrupoService) {}

  ngOnInit() {
    // Pegue o id da pessoa do serviço ou outra fonte de dados
    this._FormService.getPessoas().subscribe({
      next: (pessoas: Pessoa[]) => {
        if (pessoas.length > 0) {
          this.grupo.pessoaid = pessoas[0].id; // Por exemplo, pegando o id da primeira pessoa
        }
      },
      error: (error) => {
        console.error('Erro ao obter pessoas', error);
      }
    });
  }

  // Método chamado ao submeter o formulário
  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      // Validação: Nome do grupo não pode ser vazio
      if (!this.grupo.nome.trim()) {
        alert('O nome do grupo é obrigatório.');
        return;
      }
    this._GrupoService.salvarGrupo(this.grupo).subscribe({
      next: (data) => {
        console.log('Grupo salvo com sucesso', data);

        // Redefinir o formulário e o objeto grupo
        myForm.reset();
        this.grupo = {
          id: 0,
          nome: '',
          descricao: '',
          pessoaid: 0  // Reseta o id da pessoa
        };

      },
      error: (error) => {
        console.error('Erro ao salvar o grupo', error);
      },
    });
  }
}}

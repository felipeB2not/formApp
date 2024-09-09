import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormService } from '../services/form.service';
import {FormsModule} from "@angular/forms";
import {Pessoa} from "../models/form";
import {Router} from "@angular/router";


@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // Necessário se o componente usar diretivas de roteamento
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule
  ],

  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    email: '',
    cpf: ''
  };

  constructor(private _formService: FormService, private _router: Router) {}

  // Método chamado ao submeter o formulário
  onSubmit() {
    // Adiciona a pessoa usando o serviço
    this._formService.addPessoa(this.pessoa);

    // Redireciona para outra página (por exemplo, listagem de pessoas)
    this._router.navigate(['/listagem']);
  }
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { FormService } from '../services/form.service';
import {FormsModule, NgForm} from "@angular/forms";
import {Pessoa} from "../models/pessoa";
import {Router} from "@angular/router";
import {MatToolbarModule} from '@angular/material/toolbar';


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
    FormsModule,
    MatToolbarModule
  ],

  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  pessoa: Pessoa = {
    id: 0,
    nome: '',
    email: '',
    cpf: '',
    telefone: ''
  };

  constructor(private _formService: FormService, private _router: Router) {}

  // Método chamado ao submeter o formulário
  onSubmit(myForm: NgForm) {
    this._formService.salvarPessoa(this.pessoa).subscribe({
      next: (data) => {
        console.log('Pessoa salva com sucesso', data);

        // Aqui você pode exibir uma mensagem de sucesso ou redirecionar o usuário
        myForm.reset();

      },
      error: (error) => {
        console.error('Erro ao salvar a pessoa', error);
        // Aqui você pode exibir uma mensagem de erro
      },
    });
  }
}

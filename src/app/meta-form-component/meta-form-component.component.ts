import { Component } from '@angular/core';
import {FormService} from "../services/form.service";
import {Router, RouterModule} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {MetaService} from "../services/meta.service";
import {Grupo} from "../models/grupo";
import {Meta} from "../models/meta";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatOption, MatSelect, MatSelectModule} from "@angular/material/select";
import {MatCard, MatCardModule, MatCardTitle} from "@angular/material/card";
import {CommonModule, NgForOf} from "@angular/common";
import {MatInputModule} from "@angular/material/input";
import {MatOptionModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-metas',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    FormsModule,
    MatToolbarModule
  ],
  templateUrl: './meta.component.html',
  styleUrl: './meta.component.css'
})
export class MetasComponent {

  grupos: Grupo[] = [];

  meta: Meta = {
    id: 0,
    nome: '',
    descricao: '',
    valor: 0,
    grupoid: 0
  };

  constructor(private _FormService: FormService, private _router: Router,  private _MetaService: MetaService) {}

  ngOnInit() {
    this._FormService.getGrupos().subscribe({
      next: (grupos: Grupo[]) => {
        if (grupos.length > 0) {
          this.meta.grupoid = grupos[0].id; // Seleciona o primeiro grupo por padrão
        }
      },
      error: (error) => {
        console.error('Erro ao obter grupos', error);
      }
    });
  }

  onSubmit(myForm: NgForm) {
    if (myForm.valid) {
      // Validação: Nome da meta não pode ser vazio
      if (!this.meta.nome.trim()) {
        alert('O nome da meta é obrigatório.');
        return;
      }

      this._MetaService.salvarMeta(this.meta).subscribe({
        next: (data) => {
          console.log('Meta salva com sucesso', data);

          // Reseta o formulário e o objeto meta
          myForm.reset();
          this.meta = {
            id: 0,
            nome: '',
            descricao: '',
            valor: 0,
            grupoid: 0
          };

        },
        error: (error) => {
          console.error('Erro ao salvar a meta', error);
        },
      });
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {FormService} from "../services/form.service";
import {Pessoa} from "../models/pessoa";
import {MatTable} from "@angular/material/table";
import {MatTableModule} from "@angular/material/table";
import {DatePipe} from "@angular/common";
import {RouterLink} from "@angular/router";
import {MatCardActions} from "@angular/material/card";

@Component({
  selector: 'app-pessoa-list',
  standalone: true,
  imports: [
    MatTable,
    DatePipe,
    MatTableModule,
    RouterLink,
    MatCardActions
  ],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.css'
})
export class PessoaListComponent implements OnInit {
pessoas: Pessoa[] = [];
displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'telefone'];

constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getPessoas().subscribe((data) => {
      this.pessoas = data;
    });
  }
}

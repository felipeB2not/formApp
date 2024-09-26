import {Component, OnInit} from '@angular/core';
import {FormService} from "../services/form.service";
import {Pessoa} from "../models/pessoa";
import {MatTable} from "@angular/material/table";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-pessoa-list',
  standalone: true,
  imports: [
    MatTable,
    DatePipe
  ],
  templateUrl: './pessoa-list.component.html',
  styleUrl: './pessoa-list.component.css'
})
export class PessoaListComponent implements OnInit {
pessoas: Pessoa[] = [];
displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'nome'];

constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.formService.getPessoas().subscribe((data) => {
      this.pessoas = data;
    });
  }
}

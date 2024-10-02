import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";
import {GruposComponent} from "./grupos/grupos.component";

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'pessoa-list', component: PessoaListComponent },
  { path: 'grupo', component: GruposComponent },
  { path: '', redirectTo: '/pessoa-list', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/formulario' } // Rota coringa para rotas desconhecidas
];

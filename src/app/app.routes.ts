import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { ListagemComponent } from './listagem/listagem.component';
import {PessoaListComponent} from "./pessoa-list/pessoa-list.component";

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: 'pessoa-list', component: PessoaListComponent },
  { path: '', redirectTo: '/listagem', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/listagem' } // Rota coringa para rotas desconhecidas
];

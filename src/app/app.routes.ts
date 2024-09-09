import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { ListagemComponent } from './listagem/listagem.component';

export const routes: Routes = [
    { path: 'formulario', component: FormularioComponent },
  { path: 'visualizacao', component: VisualizacaoComponent },
  { path: 'listagem', component: ListagemComponent },
  { path: '', redirectTo: '/listagem', pathMatch: 'full' }, // Redirecionamento padrão
  { path: '**', redirectTo: '/listagem' } // Rota coringa para rotas desconhecidas
];

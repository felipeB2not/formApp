import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent {
constructor(private router: Router){
}
RotaFormulario(){
  this.router.navigate(['/formulario']);
}

}

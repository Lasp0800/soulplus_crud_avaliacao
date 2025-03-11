import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { DetalhesClienteComponent } from './detalhes-cliente/detalhes-cliente.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListaClienteComponent, DetalhesClienteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  clientes = ['Cliente 1', 'Cliente 2', 'Cliente 3'];
}

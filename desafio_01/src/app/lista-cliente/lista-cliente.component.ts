import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lista-cliente',
  standalone: true,
  imports: [NgFor],
  templateUrl: './lista-cliente.component.html',
  styleUrl: './lista-cliente.component.css'
})
export class ListaClienteComponent {
  @Input() clientes: string[] = [];
}

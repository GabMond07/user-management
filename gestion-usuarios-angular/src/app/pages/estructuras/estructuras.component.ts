import { Component } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent {
  mostrar = false;
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  opcion = '';
}
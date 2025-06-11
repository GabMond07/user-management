import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css'],
  standalone: false,
  imports: [IonicModule, FormsModule]
})
export class EstructurasComponent {
  mostrar = false;
  items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
  opcion = '';
}
import { Component, OnInit } from '@angular/core';
import { UsuariosService, User } from '../../core/usuarios.service';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  standalone: false,
  imports: [IonicModule]
})
export class UsuariosComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.usuariosService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
        this.loading = false;
      }
    });
  }
}
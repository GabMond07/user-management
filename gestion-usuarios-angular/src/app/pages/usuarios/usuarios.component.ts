import { Component, OnInit } from '@angular/core';
import { UsuariosService, User } from '../../core/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
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
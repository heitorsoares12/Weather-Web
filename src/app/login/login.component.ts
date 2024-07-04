import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  cpf: string = '';
  newCpf: string = '';
  showRegisterForm: boolean = false;

  constructor(private userService: UserService) {}

  toggleRegister() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  submitLoginForm() {
    this.userService.login(this.cpf).subscribe(
      (user: any) => {
        console.log('Usuário encontrado:', user);
      },
      error => {
        console.error('Erro ao buscar usuário:', error);
      }
    );
  }

  submitRegisterForm() {
    this.userService.register(this.newCpf).subscribe(
      (response: any) => {
        console.log('Usuário cadastrado com sucesso:', response);
      },
      error => {
        console.error('Erro ao cadastrar usuário:', error);
      }
    );
  }
}

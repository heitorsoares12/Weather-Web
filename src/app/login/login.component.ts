import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  toggleRegister() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  submitLoginForm() {
    // Lógica para enviar o formulário de login
    console.log("CPF para login:", this.cpf);
  }

  submitRegisterForm() {
    // Lógica para enviar o formulário de registro
    console.log("CPF para registro:", this.newCpf);
  }
}

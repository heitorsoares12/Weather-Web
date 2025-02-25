import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:44341/api/User';

  constructor(private http: HttpClient) {}

  login(cpf: string): Observable<any> {
    const url = `${this.apiUrl}/user?cpf=${cpf}`;
    return this.http.get<any>(url);
  }

  register(cpf: string): Observable<any> {
    const url = `${this.apiUrl}/user?cpf=${cpf}`;
    return this.http.post<any>(url, {});
  }
}

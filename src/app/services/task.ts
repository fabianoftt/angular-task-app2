import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tarefa } from '../types/tarefas';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private apiUrl = `${environment.apiUrl}/Tasks`;

  private http = inject(HttpClient);

  getTasks(): Observable<tarefa[]> {
    return this.http.get<tarefa[]>(this.apiUrl);
  }
}

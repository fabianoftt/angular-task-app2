import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tarefa } from '../types/tarefas';

@Injectable({
  providedIn: 'root',
})
export class Task {
  private apiUrl = 'http://localhost:3000/Tasks';

  // em vez de constructor(private http: HttpClient)
  private http = inject(HttpClient);

  getTasks(): Observable<tarefa[]> {
    return this.http.get<tarefa[]>(this.apiUrl);
  }
}

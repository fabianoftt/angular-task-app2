import { Component, OnInit, inject } from '@angular/core';
import { Task } from '../../services/task';
import { tarefa } from '../../types/tarefas';

@Component({
  selector: 'app-tasks',
  styleUrls: ['./tasks.css'], // cuidado: é styleUrls (plural)
  templateUrl: './tasks.html',
  imports: [],
})
export class Tasks implements OnInit {
  tarefa: tarefa[] = [];

  // em vez de constructor, use inject()
  private taskService = inject(Task);

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefa = dado;
      console.log(dado);
    });
  }
}

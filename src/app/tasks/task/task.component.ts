import { Component, Input, Output, inject } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

type Task = {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
  standalone: false
})
export class TaskComponent {
  @Input({required:true}) task!:Task;
  private taskService = inject(TasksService);


  onCompleteTask() {
    this.taskService.removeTask(this.task.id);
    }

}

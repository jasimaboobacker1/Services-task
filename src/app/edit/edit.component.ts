import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from '../Services/home.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  task: { id: number, title: string, description: string } = { id: 0, title: '', description: '' };
  tasks: any[] = [];
  

  constructor(private route: ActivatedRoute, private Taskservice: HomeService) { }

  ngOnInit(): void {
    this.tasks = this.Taskservice.getDetails();
    const taskId = +(this.route.snapshot.paramMap.get('id') ?? '0');
   
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      this.task = task;
      console.log('Task found:', task);
    } else {
      console.log(`Task with ID ${taskId} not found`);
    }
  }
  
updateTask(): void {
    this.Taskservice.updateTask(this.task.id, this.task.title, this.task.description);
  }



}




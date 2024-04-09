import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HomeService } from '../Services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  tasks: any[] = [];
  
  constructor(private Taskservice: HomeService,private router:Router){}

  //  add task
  addTask(title: string, description: string): void {
    if (!title.trim() || !description.trim()) {
      alert('Please enter both a title and a description.')
      return;
    }
    this.Taskservice.addTask(title, description);
  }
  
  // updation
  update(task:any){
    this.router.navigate(['edit/',task.id])
  }

  // deletion
  deleteTask(id: number): void {
    
    this.tasks = this.tasks.filter(task => task.id !== id);
   
  }
  
  ngOnInit(): void {
    this.tasks = this.Taskservice.getDetails();
    
  }

}

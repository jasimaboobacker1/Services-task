import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router) { }

  public tasks: { id: number, title: string, description: string }[] = [
   
   
  ];
  
  // add task
  addTask(title: string, description: string): void {
    const newId = this.tasks.length + 1;
    this.tasks.push({ id: newId, title, description });
    
  }
  
  // updation
  updateTask(id: number, title: string, description: string): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { id, title, description };
      this.router.navigate(['/']);
    }
  }
  
  
  // deletion
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
  getDetails(){
    return this.tasks;
  }
}

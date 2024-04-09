import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private router:Router) { }

  tasks: { id: number, title: string, description: string }[] = [
    { id: 1, title: 'Complete Angular Tutorial', description: 'Finish the tutorial on Angular basics' },
    { id: 2, title: 'Prepare for Interview', description: 'Review common interview questions and practice answers' },
    { id: 3, title: 'Buy Groceries', description: 'Pick up vegetables, fruits, and bread from the store' },
    { id: 4, title: 'Call Mom', description: 'Check in with mom and catch up on family news' }
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

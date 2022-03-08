// Services are special files in Angular that are used to manage data. They usually pull data from XHR (remember XML/HTTP Requests from Module 1?), but they can also store data on their own.
// A service is like a 'brain' in an Angular app that either returns data from the service itself or data retrieved from an external source. It can be viewed as a 'data manager'.

// Services are objects designed for encapsulating business logic and data that can be shared by many components. They are used to increase the reusability and modularity of apps.

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;

    return this.http.delete<Task>(url);
  }
}


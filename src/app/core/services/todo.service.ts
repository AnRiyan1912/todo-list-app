import { Injectable } from '@angular/core';
import { ITodo } from '../models/todo.models';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: ITodo[] = [
    {
      id: '12312jdjasd',
      title: 'learn java',
      description: 'must finish evening',
      status: 'OPEN',
    },
  ];
  constructor() {}

  getAllTodo() {
    return this.todos;
  }
}

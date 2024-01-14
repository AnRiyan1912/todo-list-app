import { Component, OnInit } from '@angular/core';
import { TodoCardComponent } from '../../shared/components/todo-card/todo-card.component';
import { TodoService } from '../../core/services/todo.service';
import { ITodo } from '../../core/models/todo.models';
import { SliedPanelComponent } from '../../shared/ui/slied-panel/slied-panel.component';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [TodoCardComponent, SliedPanelComponent, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent implements OnInit {
  todoForm!: FormGroup;
  todos: ITodo[] = [];
  isSlidePanelOpen = false;
  constructor(private todoServices: TodoService, private fb: FormBuilder) {
    this.todoForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      status: new FormControl('OPEN', [Validators.required]),
    });
  }
  ngOnInit(): void {
    this.getAllTodos();
  }
  getAllTodos() {
    this.todos = this.todoServices.getAllTodo();
  }
  openSlidePanel = () => {
    this.isSlidePanelOpen = true;
  };
  onCloseSlidePanel() {
    this.isSlidePanelOpen = false;
  }
}

import {
  ITodoStatus,
  ITodoType,
} from '../../shared/components/todo-card/todo-card.component';

export interface ITodo {
  id: string;
  title: string;
  description: string;
  status: ITodoType;
  created_at?: string;
  updated_at?: string;
}

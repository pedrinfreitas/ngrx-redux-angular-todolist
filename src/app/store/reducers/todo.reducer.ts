import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todos/todo.model';

import { create } from '../actions/todo.action';

export const initialState: Todo[] = [new Todo('Criar um todo!')];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)])
);

export const todoReducer = (state: any, action: any) =>
  _todoReducer(state, action);

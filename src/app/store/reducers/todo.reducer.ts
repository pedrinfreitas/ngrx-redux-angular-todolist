import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todos/todo.model';

import { create, toggle } from '../actions/todo.action';

export const initialState: Todo[] = [
  new Todo('Criar um todo!'),
  new Todo('Criar outro todo!'),
  new Todo('Criar mais outro todo!'),
];

const _todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      } else {
        return todo;
      }
    });
  })
);

export const todoReducer = (state: any, action: any) =>
  _todoReducer(state, action);

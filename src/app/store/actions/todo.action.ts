import { createAction, props } from '@ngrx/store';

export const create = createAction(
  '[TODO] Create todo',
  props<{ text: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);

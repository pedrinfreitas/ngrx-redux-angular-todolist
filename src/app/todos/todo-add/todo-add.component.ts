import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as actions from '../../store/actions/todo.action';
import { AppState } from './../../store/state';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent implements OnInit {
  txtInput: FormControl;

  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', Validators.required);
  }

  ngOnInit(): void {}

  addTodo() {
    if (this.txtInput.invalid) {
      return;
    }

    this.store.dispatch(actions.create({ text: this.txtInput.value }));

    console.log(this.txtInput.value);
    console.log(this.txtInput.valid);
  }
}

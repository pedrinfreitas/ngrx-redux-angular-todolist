import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state';

import * as actions from './../../store/actions/todo.action';
import { ITodo } from './../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: ITodo;

  @ViewChild('inputDevice')
  txtInputDevice: ElementRef;

  chkComplete: FormControl;
  txtInput: FormControl;

  editando: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log(this.todo);

    this.chkComplete = new FormControl(this.todo.complete);
    this.txtInput = new FormControl(this.todo.text, Validators.required);

    this.chkComplete.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  edit() {
    this.editando = true;

    setTimeout(() => {
      this.txtInputDevice.nativeElement.select();
    }, 1);
  }

  closeEdit() {
    this.editando = false;
  }
}

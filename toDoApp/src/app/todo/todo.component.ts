import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitems';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {

  constructor() { }

  model = new Model();

  getItems() {
    return this.model.items;
  }

}

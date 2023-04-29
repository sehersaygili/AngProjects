import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todoitems';
import { Model } from '../model';
import { retry } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  
  constructor() { }

  model = new Model();

  displayAll: boolean = false; //yapılmamışlar false


  addItem(value: string) {
    if(value != "") {
      this.model.items.push({description: value, action: false})
    } else {
      alert('Boş Girdiniz!');
    }
  }
  getItems() {
    if(this.displayAll) {
      return this.model.items;
    } 
     return this.model.items.filter(item => item.action == false)
  } 
  displayCount() {
    return this.model.items.filter(i=>i.action).length;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {

  constructor() { }

  items = [
   { description: "kahvaltı", action: "Yes"},
   { description: "Spor", action: "Yes"},
   { description: "Alışveriş", action: "No"}
  ];

}

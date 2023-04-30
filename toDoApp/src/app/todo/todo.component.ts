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
  
  constructor() {
    this.model.items = this.getItemsFromLS();//başlangışta da set edilsin
   }

  model = new Model();

  displayAll: boolean = false; //yapılmamışlar false


  addItem(value: string) {
    if(value != "") {
      let data = {description: value, action: false}; //localStorage veri saklamak için değişkene atadım
      this.model.items.push(data);
      let items = this.getItemsFromLS(); //local strogedan veri çekmek istiyorum.
      items.push(data);
      localStorage.setItem("items",JSON.stringify(items)); //json formatında string veriye çevireceğiz, saklayacağız
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
  getItemsFromLS() {
    let items: TodoItem[] = []
    let value = localStorage.getItem("items");
    if(value != null) {
      items = JSON.parse(value);
    }
    return items;
  }
  onClicked(item: TodoItem) {
    let items = this.getItemsFromLS(); //localStorage dan bilgileri aldık
    localStorage.clear(); //önceki veriler gitsin
    items.forEach(i => {
      if(i.description == item.description) {
        i.action = item.action;
      }
    });

    localStorage.setItem("items",JSON.stringify(items)); 

  }
}

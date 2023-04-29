import { TodoItem } from "./todoitems"

export class Model {
    name:  string;
    items: TodoItem[];

    constructor() {
        this.name = "Seher";
        this.items = [
            { description: "kahvaltı", action: true},
            { description: "Spor", action: false},
            { description: "Alışveriş", action: false}
        ];
    }
}
const m = new Model();
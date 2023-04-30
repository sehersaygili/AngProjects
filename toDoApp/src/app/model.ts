import { TodoItem } from "./todoitems"

export class Model {
    name:  string;
    items: TodoItem[];

    constructor() {
        this.name = "Seher";
        this.items = [];
    }
}
const m = new Model();
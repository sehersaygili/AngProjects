import { TodoItem } from "./todoitems"

export class Model {
    name:  string;
    items: TodoItem[];

    constructor() {
        this.name = "Seher";
        this.items = [
            { description: "kahvaltı", action: "Yes"},
            { description: "Spor", action: "Yes"},
            { description: "Alışveriş", action: "No"}
        ];
    }
}
const m = new Model();
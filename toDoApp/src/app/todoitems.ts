// export class TodoItem {
//     description: string;
//     action: string;

//     constructor(description: string, action: string) {
//         this.description = description;
//         this.action = action;
//     }
// }


// class ile yapımı

// export class TodoItem{
//     constructor(public description:string , public action:string) {
//         this.description = description;
//         this.action = action;
//     }
// }

export interface TodoItem{ //interface ile oluşturulacak objelerin şemasını oluşturuyoruz
    description: string; //yanlış bir değer girildiğinde uyarır
    action: boolean;
}


import { ListItem } from "./list-item.model";


export class List {

    id: number;
    title: string;
    createdin: Date;
    finishedIn: Date; 
    finished: boolean;
    items: ListItem[];

    constructor( title: string){ 
        
        this.id = new Date().getTime();
        this.title = title;
        this.finished = false;
        this.finishedIn = new Date();
        this.items = [];
    }
}

import { Injectable } from '@angular/core';
import { List } from '../models';


@Injectable()
export class PurchasesService {

    list: List [] = [];

    constructor(){
    
        const lista = new List ('tarea')
        

        this.list.push(lista);
        console.log(this.list);
    }
}
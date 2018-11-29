import { Injectable } from '@angular/core';
import { List } from '../models';



@Injectable()
export class PurchasesService {

    list: List [] = [];

    constructor(){
        
        this.loadStorage();
    }

    addList ( list: List ){
        this.list.push(list);
        this.saveStorage();
    }

    delList ( list: List){
        this.list = this.list.filter( listData =>{
            return listData.id !== list.id
        });
        this.saveStorage();
    }

    saveStorage(){
        localStorage.setItem('data',JSON.stringify(this.list));
    }

    loadStorage(){
        if( localStorage.getItem('data')){
            this.list = JSON.parse(localStorage.getItem('data'));
        } else {
        this.list = []
        }
    }
}
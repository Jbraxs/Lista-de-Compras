import { Component } from "@angular/core";
import { PurchasesService } from "../../services/purchases.service";
import { NavParams } from "ionic-angular";
import { List, ListItem } from "../../models";


@Component({
    selector: 'page-addItems',
    templateUrl: 'addItems.component.html'
})
export class addItemsPage { 

    list: List; 
    nameItem: string = '';

    constructor ( public purchasesService: PurchasesService,
                  private navParams: NavParams){

        
                
        const title = this.navParams.get('title')
        
        if (this.navParams.get('list')){
            this.list = this.navParams.get('list')
        }else{
            this.list = new List (title);  
            this.purchasesService.addList( this.list );
        }

    }

    addItems() {

        this.purchasesService.saveStorage();

        if ( this.nameItem.length === 0){
            return;
        }
        const newItem = new ListItem( this.nameItem);
        this.list.items.push (newItem);

        this.nameItem = '';
    }

    checkbox(item: ListItem ){

        item.finished = !item.finished;

        const finished = this.list.items.filter( itemData => {
            return !itemData.finished;
        }).length 

        if( finished === 0 ){
            this.list.finished = true;
            this.list.finishedIn = new Date();
        }else {
            this.list.finished = false;
            this.list.finishedIn = null;
        }

        this.purchasesService.saveStorage();
    }
    
    delitem( index: number ){
        this.list.items.splice(index, 1)
        this.purchasesService.saveStorage();
    }
}
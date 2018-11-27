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
        this.list = new List (title);
    }

    addItems() {

        if ( this.nameItem.length === 0){
            return;
        }
        const newItem = new ListItem( this.nameItem);
        this.list.items.push (newItem);

        this.nameItem = '';
    }

    checkbox(item: ListItem ){
        item.finished = !item.finished;
    }

}
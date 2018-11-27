import { Component } from "@angular/core";
import { PurchasesService } from "../../services/purchases.service";
import { List } from "../../models";



@Component({
    selector: 'page-finished',
    templateUrl: 'finished.component.html'
})
export class FinishedPage {

    constructor ( public purchasesService: PurchasesService){
    }

    listSelected(list: List){
        console.log(list);
    }


}
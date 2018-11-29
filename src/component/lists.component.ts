import { Component, Input } from "@angular/core";
import { PurchasesService } from "../services/purchases.service";
import { NavController, AlertController, ItemSliding } from 'ionic-angular';
import { addItemsPage } from "../pages/addItems/addItems.component";
import { List } from "../models";



@Component ({
    selector: 'app-lists',
    templateUrl: 'lists.component.html'
})
export class ListsComponent {

    @Input() complStatus: boolean = false;

    constructor ( public purchasesService: PurchasesService,
                  private NavCtrl: NavController,
                  private alertCtrl: AlertController ){
    }

    listSelected(list: List){
        this.NavCtrl.push(addItemsPage,{
            title: list.title,
            list: list
        });
    }
    
    delList( list:List ){
       this.purchasesService.delList( list );
    }

    editList ( list: List, slidingItem: ItemSliding ) {

        slidingItem.close();
        
        const alert = this.alertCtrl.create({
            title: 'Editar Nombre',
            inputs: [{
                name: 'title',
                placeholder: 'Editar Nombre de la lista',
                value: list.title
            }],
            buttons: [{
                text: 'Cancelar',
            },{
                text: 'Guardar',
                handler: data => {
                    if(data.title.length === 0){
                        return;
                    }
                    list.title = data.title;
                    this.purchasesService.saveStorage();
                }
            }]
        });
        alert.present();

    } 

}
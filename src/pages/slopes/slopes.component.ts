import { Component } from "@angular/core";
import { PurchasesService } from "../../services/purchases.service";
import { List } from "../../models";
import { NavController, AlertController } from "ionic-angular";
import { addItemsPage } from "../addItems/addItems.component";
import { ListItem } from '../../models/list-item.model';




@Component({
    selector: 'page-slopes',
    templateUrl: 'slopes.component.html'
})
export class SlopesPage { 

    constructor ( public purchasesService: PurchasesService,
                  private navCtrl: NavController,
                  private alertCtrl: AlertController){
    }

    listSelected(list: List){
        console.log(list);
    }

    addList(){

        const alert = this.alertCtrl.create({
            title: 'Nueva Lista',
            inputs: [{
                name: 'title',
                placeholder: 'Nombre de la Lista'
            }],
            buttons: [{
                text: 'Cancelar',
            },{
                text: 'Añadir',
                handler: data => {
                    if(data.title.length === 0){
                        return;
                    }
                    this.navCtrl.push( addItemsPage, {
                        title: data.title
                    });
                }
            }]
        });
        alert.present();
    }

}
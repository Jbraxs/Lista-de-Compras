import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


//Componentes
import { SlopesPage } from '../pages/slopes/slopes.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { addItemsPage } from '../pages/addItems/addItems.component';
import { ListsComponent } from '../component/lists.component';

//Servicios
import { PurchasesService } from '../services/purchases.service';

//Pipes
import { FilterCompltPipe } from '../pipes/filter-complt/filter-complt';

@NgModule({
  declarations: [
    MyApp,
    TabsPage, 
    SlopesPage,
    FinishedPage,
    addItemsPage,
    FilterCompltPipe,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    SlopesPage,
    FinishedPage,
    addItemsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PurchasesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

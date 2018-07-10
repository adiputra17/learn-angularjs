import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
// import { ItemComponent } from './item/item.component';
// import { DetailItemComponent } from './detail-item/detail-item.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        // ItemComponent,
        // DetailItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

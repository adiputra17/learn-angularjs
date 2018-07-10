import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app.routing';
// import { FormComponent } from './form/form.component';
// import { ItemComponent } from './item/item.component';
// import { DetailItemComponent } from './detail-item/detail-item.component';

@NgModule({
    declarations: [
        AppComponent,
        routingComponents,
        // FormComponent,
        // ItemComponent,
        // DetailItemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }

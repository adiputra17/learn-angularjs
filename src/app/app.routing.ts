import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { DetailItemComponent } from './detail-item/detail-item.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    { path: 'dashboard', component: ItemComponent },
    { path: 'detail-item/:id', component: DetailItemComponent },
    { path: 'form', component: FormComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }

export const routingComponents = [ItemComponent, DetailItemComponent, FormComponent];
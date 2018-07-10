import { Component, OnInit, NgModule } from '@angular/core';
// import { Item } from '../item';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
})

export class ItemComponent implements OnInit{

    // item: Item = {
    //     id: 1,
    //     nama: 'Windstorm',
    //     harga: 1000,
    //     gambar: 'Windstorm',
    //     deskripsi: 'Windstorm'
    // };

    leftTitle = "List Category";
    rightTitle = "The Most Popular";
    menus = ["Fashion", "Electronic", "Sport", "Furniture", "Health", "Computer", "Smartphone"];

    public items;

    constructor(private http: HttpClient) { 
        this.http.get('http://localhost:3000/item').subscribe(data => {
            var json_s = JSON.stringify(data);
            var json_d = JSON.parse(json_s);
            console.log(json_d.result);
            this.items = json_d.result;
        });
    }

    ngOnInit() {
    }

}

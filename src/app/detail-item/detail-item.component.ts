import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-detail-item',
    templateUrl: './detail-item.component.html',
    styleUrls: ['./detail-item.component.css']
})

export class DetailItemComponent implements OnInit {
    public id;
    public items;

    constructor(private http: HttpClient, private route: ActivatedRoute) { 
        var id = this.route.snapshot.params['id'];
        this.id = id;
        console.log(id);

        this.http.get('http://localhost:3000/item/'+id+'').subscribe(data => {
            var json_s = JSON.stringify(data);
            var json_d = JSON.parse(json_s);
            console.log(json_d.result);
            this.items = json_d.result;
        });
    }

    leftTitle = "List Category";
    rightTitle = "The Most Popular";
    menus = ["Fashion", "Electronic", "Sport", "Furniture", "Health", "Computer", "Smartphone"];

    ngOnInit() {
    }

}

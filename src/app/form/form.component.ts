import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    leftTitle = "List Category";
    rightTitle = "The Most Popular";
    menus = ["Fashion", "Electronic", "Sport", "Furniture", "Health", "Computer", "Smartphone"];

    constructor(private http: HttpClient, private router: Router) {

    }

    onSubmit(f: NgForm) {
        console.log(f.value);  // { first: '', last: '' }
        console.log(f.valid);  // false

        if (f.valid) {
            this.http.post('http://localhost:3000/item', {
                nama: f.value.nama,
                harga: f.value.harga,
                gambar: f.value.gambar,
                deskripsi: f.value.deskripsi,
            }).subscribe(data => {
                var json_s = JSON.stringify(data);
                var json_d = JSON.parse(json_s);
                console.log(json_d.result);
                // this.items = json_d.result;
            });
            this.router.navigate(['/']);
        }else{
            this.router.navigate(['/form']);
        }
    }

    ngOnInit() {
    }

}

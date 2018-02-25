import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface JsonplacePost {
    id: number;
    userId: number;
    title: string;
    body: string
};

@Component(
    {
        selector: 'app-index',
        templateUrl: 'simple-page.template.html'
    })

export class SimplePageComponent implements OnInit {
    public jsonInput: JsonplacePost = {id: 0, userId: 0, title: '', body: ''};

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.http.get<JsonplacePost>('http://jsonplaceholder.typicode.com/posts/1')
            .subscribe((data: JsonplacePost) => {
                this.jsonInput = data;
                console.log('SimplePageComponent', data);
            });
    }
}

@NgModule(
    {
        declarations: [SimplePageComponent]
    })

export class SimplePageModule {
}

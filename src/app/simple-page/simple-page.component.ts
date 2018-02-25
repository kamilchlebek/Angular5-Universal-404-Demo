import {Component, NgModule, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component(
    {
        selector: 'app-index',
        template: `<h1>This is a simple page component</h1><h2>It sets a normal 200 status</h2>`
    })

export class SimplePageComponent implements OnInit{
    constructor(private http: HttpClient) {}

    ngOnInit() {
        this.http.get('http://api.infogan.co.il/api/comment?post=FfS2VmezufmEBo4cQ3JAbD')
            .subscribe((data) => console.log(data));
    }
}

@NgModule(
    {
        declarations: [SimplePageComponent]
    })

export class SimplePageModule {
}

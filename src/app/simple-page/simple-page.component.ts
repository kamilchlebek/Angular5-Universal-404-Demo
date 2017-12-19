import {Component, NgModule} from '@angular/core';

@Component(
    {
        selector: 'app-index',
        template: `<h1>This is a simple page component</h1><h2>It sets a normal 200 status</h2>`
    })

export class SimplePageComponent {
}

@NgModule(
    {
        declarations: [SimplePageComponent]
    })

export class SimplePageModule {
}

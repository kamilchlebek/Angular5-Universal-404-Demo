import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {InjectionService} from './services/injection.service';
import {Four04Component, Four04Module} from './four04/four04.component';
import {SimplePageComponent, SimplePageModule} from './simple-page/simple-page.component';
import {RouterModule, Routes} from '@angular/router';
import {ServerResponseService} from './services/server-response';

const appRoutes: Routes = [
    {path: '', component: SimplePageComponent},
    {path: 'four04', component: Four04Component}
];

@NgModule({
              declarations: [
                  AppComponent
              ],
              imports: [
                  RouterModule.forRoot(
                      appRoutes,
                      // {enableTracing: true} // <-- debugging purposes only
                  ),
                  BrowserModule.withServerTransition({ appId: 'universal-demo-v5' }),
                  SimplePageModule,
                  Four04Module,
              ],
              providers: [InjectionService, ServerResponseService],
              bootstrap: [AppComponent]
          })
export class AppModule { }

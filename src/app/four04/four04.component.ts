import {Component, NgModule, OnInit} from '@angular/core';
import {ServerResponseService} from '../services/server-response';

@Component({
               selector: 'app-not-found',
               templateUrl: './four04.template.html',
               styleUrls: ['./four04.component.scss'],
           })

export class Four04Component implements OnInit {
    constructor(
        private serverResponse: ServerResponseService
    ) {
    }

    ngOnInit() {
        this.serverResponse.setNotFound('The page was not found');
    }
}

@NgModule({
              declarations: [Four04Component]
          })
export class Four04Module {
}

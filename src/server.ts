import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server';
import {REQUEST, RESPONSE} from '@nguniversal/express-engine/tokens';
import { enableProdMode, ValueProvider } from '@angular/core';
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';

enableProdMode();

const PORT = 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

app.engine('html', (_, options, callback) => {
    const opts = {
        document: template,
        url: options.req.url,
        extraProviders: [
            // make req and response accessible when angular app runs on server
            <ValueProvider>{
                provide: REQUEST,
                useValue: options.req
            },
            <ValueProvider>{
                provide: RESPONSE,
                useValue: options.req.res,
            },
        ]};

    renderModuleFactory(AppServerModuleNgFactory, opts)
        .then(html => callback(null, html));
});

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
    res.render('index', { req });
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});

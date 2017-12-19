import 'reflect-metadata';
import 'zone.js/dist/zone-node';

// replace platform-server renderer import:
// import { renderModuleFactory } from '@angular/platform-server'
// with express-engine renderer imported here:
import {ngExpressEngine} from '@nguniversal/express-engine';

import {enableProdMode} from '@angular/core'
import {join} from 'path';
// import {readFileSync} from 'fs';
import * as express from 'express';

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const {AppServerModuleNgFactory} = require('main.server');

// replace call to renderer factory below
//
// const template = readFileSync(join(DIST_FOLDER, 'browser', 'simple-page.html')).toString();
// app.engine('html', (_, options, callback) => {
// const opts = {document: template, url: options.req.url};
//
//     renderModuleFactory(AppServerModuleNgFactory, opts)
//         .then(html => callback(null, html));
// });

// to ngExpress renderer
app.engine('html', ngExpressEngine(
    {
        bootstrap: AppServerModuleNgFactory, // Give it a module to bootstrap
    }));

app.set('view engine', 'html');

app.set('view engine', 'html');
app.set('views', 'src');

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*', (req, res) => {
// Pass res to render function: replace this:
//     res.render('index', {req});
// to this:
    res.render('index', {req, res});
});

app.listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}!`);
});

# Universal With 404 response and angular V5 Demo
## based on [Angular 5 universal with Transfer State using @angular/cli by Éverton Roberto Auler](https://medium.com/@evertonrobertoauler/angular-5-universal-with-transfer-state-using-angular-cli-19fe1e1d352c)
### You can get response header data, set any status code, any error messages and so forth. 
##Quickstart
1. git clone... 
2. npm install
3. npm run build
4. node dist/server.js

## Project description:
It has only two components ("pages"). a simple do nothing page which is the default and an "error" page 
which results in changing the http response header. 
The implication of changing the status applies only to server side rendering so you need to use a non js 
browser such as curl to see the outcome.

### How to make such a 404 project from scratch:
1. follow the instructions in [Angular 5 universal](https://medium.com/@evertonrobertoauler/angular-5-universal-with-transfer-state-using-angular-cli-19fe1e1d352c)
2. Add router definitions in app.module.ts, app.component.html and app.component.ts
3. Add request to load nguniversal/express-engine in package.json (line "@nguniversal/express-engine": "^5.0.0-beta.5")
4. Update server.ts as following:  
    4.1 Add import: import {ngExpressEngine} from '@nguniversal/express-engine';  
    4.2 Add extraProviders on the renderModuleFactory option object (lines 24-34)
5. Create a service as explained on [npm @nguniversal/express-engine](https://www.npmjs.com/package/@nguniversal/express-engine)
6. When an error is detected on a page call a service method to alter the page header and status

#### In this example I copied some useful functions into the server-response.ts service from [fusebox-angular-universal-starter](https://github.com/patrickmichalina/fusebox-angular-universal-starter) by [Patrick Michalina](https://github.com/patrickmichalina)

### Checking:
You should use a non js browser such as curl. With curl you should use the -i option to get it display the response header.
```
$ curl -i http://localhost:4200/four04 | head
     % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                    Dload  Upload   Total   Spent    Left  Speed
   100  3357  100  3357    0     0  32443      0 --:--:-- --:--:-- --:--:-- 32592
   HTTP/1.1 404 The page was not found
   X-Powered-By: Express
   Content-Type: text/html; charset=utf-8
   Content-Length: 3357
   ETag: W/"d1d-ElYDbNrgb0PxpJiNW21+dQkLy4k"
   Date: Sun, 17 Dec 2017 16:19:20 GMT
   Connection: keep-alive
   
   <!DOCTYPE html><html lang="en"><head>
     <meta charset="utf-8">
     <title>UniversalDemoV5</title>
     <base href="/">
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

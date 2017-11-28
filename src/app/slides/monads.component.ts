import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { HttpService } from '../app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: '[app-monad]',
    templateUrl: './monads.component.html',
    styleUrls: ['./slides.component.css']
})

export class MonadComponent {
    gistUrl: string;
    mainCode: string;
    consoleOutput: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private httpService: HttpService,
                private appCom: AppComponent) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide_monad', function () {
            that.initEditor();
            that.getCode('ba3f8af8219debfa364a7c6a2fedba94').then(
                (val) => that.mainCode = String(val)
            );
        }, false);
    }

    initEditor() {
        this.jsEditorOptions = Object.assign({}, (<any>appConfig).jsEditorOptions);
        this.htmlEditorOptions = Object.assign({}, (<any>appConfig).htmlEditorOptions);
    }

    getCode(gistId) {
        var url = this.gistUrl + gistId + '/raw';
        return new Promise((resolve, reject) => {
            this.httpService.get(url).subscribe(
                (val) => { resolve(val); },
                (err) => { reject(err) }
            );
        })
    }

    run() {
        this.appCom.fpEval(this.mainCode).then(
            (val) => this.consoleOutput = String(val)
        );
    }
}
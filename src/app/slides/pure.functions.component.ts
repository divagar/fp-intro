import { Component } from '@angular/core';
import { HttpService } from '../app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: 'app-pf',
    templateUrl: './pure.functions.component.html',
    styleUrls: ['./slides.component.css']
})

export class PureFunctionsComponent {

    gistId: string;
    gistUrl: string;
    mainCode: string;
    consoleCode: string;
    consoleOutput: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private httpService: HttpService) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.gistId = 'e2b30c282780abaa7d3d3c3cbe4fee17';
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide_pf', function () {
            that.initEditor();
        }, false);
    }

    initEditor() {
        this.jsEditorOptions = Object.assign({}, (<any>appConfig).jsEditorOptions);
        this.htmlEditorOptions = Object.assign({}, (<any>appConfig).htmlEditorOptions);
        this.getCode(this.gistId);
    }

    getCode(gistId) {
        var url = this.gistUrl + gistId + '/raw';
        this.httpService.get(url).subscribe(
            (val) => { this.mainCode = val },
            (err) => { console.log(err)}
        );
    }

    run() {
        this.consoleOutput = eval(this.mainCode);
    }

}
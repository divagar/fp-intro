import { Component } from '@angular/core';
import { HttpService } from '../app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: 'app-curry',
    templateUrl: './currying.component.html',
    styleUrls: ['./slides.component.css']
})

export class CurryingComponent {

    gistId: string;
    gistUrl: string;
    mainCode: string;
    consoleCode: string;
    consoleOutput: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private httpService: HttpService) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.gistId = '67ae60ff62f34216b3a88b01623ba291';
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide_curry', function () {
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
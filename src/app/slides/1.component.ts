import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpService } from '../app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: 'app-slide1',
    templateUrl: './1.component.html',
    styleUrls: ['./slides.component.css']
})

export class Slide1Component {

    gistUrl: string;
    mainCode: string;
    consoleCode: string;
    consoleOutput: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private http: HttpClient,
                private httpService: HttpService) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide1', function () {
            that.initEditor();
        }, false);
    }

    initEditor() {
        this.jsEditorOptions = Object.assign({}, (<any>appConfig).jsEditorOptions);
        this.htmlEditorOptions = Object.assign({}, (<any>appConfig).htmlEditorOptions);
        this.getCode();
        this.getConsoleCode();
    }

    getCode() {
        var url = this.gistUrl + 'e2b30c282780abaa7d3d3c3cbe4fee17' + '/raw';
        this.httpService.get(url).subscribe(
            (val) => { this.mainCode = val },
            (err) => { console.log(err)}
        );
    }

    getConsoleCode() {
        var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
        this.httpService.get(url).subscribe(
            (val) => { this.consoleCode = val },
            (err) => { console.log(err)}
        );
    }

    run() {
        var codeToRun = this.consoleCode + this.mainCode;
        this.consoleOutput = eval(codeToRun);
    }

}
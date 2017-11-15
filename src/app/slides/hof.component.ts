import { Component } from '@angular/core';
import { HttpService } from '../app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: 'app-hof',
    templateUrl: './hof.component.html',
    styleUrls: ['./slides.component.css']
})

export class HOFComponent {

    gistUrl: string;
    mainCode: string;
    consoleCode: string;
    consoleOutput: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private httpService: HttpService) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide_hof', function () {
            that.initEditor();
        }, false);
    }

    initEditor() {
        this.jsEditorOptions = Object.assign({}, (<any>appConfig).jsEditorOptions);
        this.htmlEditorOptions = Object.assign({}, (<any>appConfig).htmlEditorOptions);
        this.getCode();
    }

    getCode() {
        var url = this.gistUrl + '67ae60ff62f34216b3a88b01623ba291' + '/raw';
        this.httpService.get(url).subscribe(
            (val) => { this.mainCode = val },
            (err) => { console.log(err)}
        );
    }

    run() {
        this.consoleOutput = eval(this.mainCode);
    }

}
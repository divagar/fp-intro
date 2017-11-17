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
            that.getCode('124de8bf19269466819dccc6c11fec75').then(
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
        this.consoleOutput = eval(this.mainCode);
    }

}
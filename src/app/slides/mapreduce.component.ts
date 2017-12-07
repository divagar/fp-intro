import { Component } from '@angular/core';
import { HttpService } from '../app.http.service';
import { AppComponent } from '../app.component';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../../config.json';

@Component({
    selector: '[app-mr]',
    templateUrl: './mapreduce.component.html',
    styleUrls: ['./slides.component.css']
})

export class MRComponent {

    gistUrl: string;
    mainCode: string;
    mainCode_map: string;
    mainCode_reduce: string;
    consoleOutput: string;
    consoleOutput_map: string;
    consoleOutput_reduce: string;
    jsEditorOptions = {};
    htmlEditorOptions = {};

    constructor(private httpService: HttpService,
                private appCom: AppComponent) {
        this.gistUrl = (<any>appConfig).gist.apiUrl;
        this.initEditor();
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide_mr', function () {
            that.initEditor();
            that.getCode('962e76ccef7dd8703c1365fa9388124e').then(
                (val) => that.mainCode = String(val)
            );
        }, false);
        Reveal.addEventListener('slide_mr_map', function () {
            that.initEditor();
            that.getCode('d9ec1b0a2274af389e53dc0cc9f526a2').then(
                (val) => that.mainCode_map = String(val)
            );
        }, false);
        Reveal.addEventListener('slide_mr_reduce', function () {
            that.initEditor();
            that.getCode('52cad12fa78bd6cc91ec8946b106ea0e').then(
                (val) => that.mainCode_reduce = String(val)
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
    run_map() {
        this.appCom.fpEval(this.mainCode_map).then(
            (val) => this.consoleOutput_map = String(val)
        );
    }
    run_reduce() {
        this.appCom.fpEval(this.mainCode_reduce).then(
            (val) => this.consoleOutput_reduce = String(val)
        );
    }
}
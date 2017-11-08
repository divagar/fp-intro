import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as Reveal from 'reveal.js';

@Component({
    selector: 'app-slide1',
    templateUrl: './1.component.html',
    styleUrls: ['./slides.component.css']
})

export class Slide1Component {

    mEditorOptions = {
        theme: 'vs-dark',
        language: 'javascript',
        autoIndent: true,
        fontSize: '20px',
        fontWeight: 400,
        lineNumbers: 'off',
        minimap: { enabled: false },
        scrollbar: { vertical: 'hidden', verticalScrollbarSize: '1px' }
    }

    mEditorOutOptions = {
        theme: 'vs-dark',
        language: 'html',
        autoIndent: true,
        fontSize: '20px',
        fontWeight: 400,
        lineNumbers: 'off',
        minimap: { enabled: false },
        scrollbar: { vertical: 'hidden', verticalScrollbarSize: '1px' }
    }

    gistUrl: string = 'https://gist.githubusercontent.com/divagar/';
    consoleCode: string;

    mainCode: string;
    consoleOutput: string;

    constructor(private http: HttpClient) {
        this.getCode();
        this.getConsoleCode();
        eval(this.consoleCode);
    }

    ngOnInit() {
        var that = this;
        Reveal.addEventListener('slide1', function () {
            that.mEditorOptions = {
                theme: 'vs-dark',
                language: 'javascript',
                autoIndent: true,
                fontSize: '20px',
                fontWeight: 400,
                lineNumbers: 'off',
                minimap: { enabled: false },
                scrollbar: { vertical: 'hidden', verticalScrollbarSize: '1px' }
            }

            that.mEditorOutOptions = {
                theme: 'vs-dark',
                language: 'html',
                autoIndent: true,
                fontSize: '20px',
                fontWeight: 400,
                lineNumbers: 'off',
                minimap: { enabled: false },
                scrollbar: { vertical: 'hidden', verticalScrollbarSize: '1px' }
            }
            that.getCode();
            that.getConsoleCode();
            eval(that.consoleCode);
        }, false);
    }

    getCode() {
        var url = this.gistUrl + 'e2b30c282780abaa7d3d3c3cbe4fee17' + '/raw';
        this.http.get(url, { responseType: 'text' }).subscribe(
            data => {
                this.mainCode = data;
            },
            (err: HttpErrorResponse) => {
                console.log("Error occured.", err)
            }
        );
    }

    getConsoleCode() {
        var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
        this.http.get(url, { responseType: 'text' }).subscribe(
            data => {
                this.consoleCode = data;
            },
            (err: HttpErrorResponse) => {
                console.log("Error occured.", err)
            }
        );
    }

    run() {
        var codeToRun = this.consoleCode + this.mainCode;
        this.consoleOutput = eval(codeToRun);
    }

}
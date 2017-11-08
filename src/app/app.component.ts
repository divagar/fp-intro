import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import * as Reveal from 'reveal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
    // this.getCode();
    // this.getConsoleCode();
    // eval(this.consoleCode);
  }

  ngOnInit() {

    var that = this;
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: 'slide', // none/fade/slide/convex/concave/zoom
    });

    Reveal.addEventListener('slidechanged', function (event) {
      // event.previousSlide, event.currentSlide, event.indexh, event.indexv
      console.log(event.indexh);
      if (event.indexh == 0) {
        that.getCode();
        that.getConsoleCode();
        eval(that.consoleCode);
      }
    });
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
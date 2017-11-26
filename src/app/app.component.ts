import { Component } from '@angular/core';
import { HttpService } from './app.http.service';
import * as Reveal from 'reveal.js';
import * as appConfig from '../../config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  gistUrl: string;

  constructor(private httpService: HttpService) {
    this.gistUrl = (<any>appConfig).gist.apiUrl;
  }

  ngOnInit() {
    Reveal.initialize({
      controls: false,
      progress: true,
      history: true,
      center: true,
      transition: 'concave',
      transitionSpeed: 'fast'
    });

    this.getConsoleCode();
  }

  getConsoleCode() {
    var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
    this.httpService.get(url).subscribe(
      (val) => { eval(val) },
      (err) => { console.log(err) }
    );
  }

  fpEval(code: string) {
    var url = this.gistUrl + 'b4458e960e2cde5d54e3337b54601126' + '/raw';
    return new Promise((resolve, reject) => {
      this.httpService.get(url).subscribe(
        (val) => { resolve(eval(val + code)); },
        (err) => { reject(err) }
      );
    })
  }
}
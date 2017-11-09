import { Component } from '@angular/core';
import * as Reveal from 'reveal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor() {
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
  }
}
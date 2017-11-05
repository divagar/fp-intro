import { Component } from '@angular/core';
import * as Reveal from 'reveal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  editorOptions = {
    theme: 'vs-dark',
    language: 'javascript',
    autoIndent: true,
    fontSize: '20px',
    fontWeight: 400,
    lineNumbers: 'off',
    minimap: {enabled: false},
    scrollbar: {vertical: 'hidden', verticalScrollbarSize: '1px'}
  }
  code: string = 'function greetings(message) { return \'Hello \' + message; } \
  \n\nvar morningGreeting = greetings(\'Good morning\');\
  \nvar noonGreeting = greetings(\'Good afternoon\');\
  \nvar eveningGreeting = greetings(\'Good evening\');\
  \n\
  \nconsole.log(morningGreeting);\
  \nconsole.log(noonGreeting);\
  \nconsole.log(eveningGreeting);';

  ngOnInit() {
    // Full list of configuration options available at:
    // https://github.com/hakimel/reveal.js#configuration
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: 'slide', // none/fade/slide/convex/concave/zoom
      //Optional reveal.js plugins
      // dependencies: [
      //   {
      //     src: '../../node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () {
      //       [].forEach.call(document.querySelectorAll('.highlight, pre code'), function (v, i) {
      //         //hljs.highlightBlock(v);
      //       });
      //     }
      //   }
      // ]
    });
  }

}
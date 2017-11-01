import { Component } from '@angular/core';
import * as Reveal from 'reveal.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
      //   { src: '../../node_modules/reveal.js/lib/js/classList.js', condition: function () { return !document.body.classList; } },
      //   { src: '../../node_modules/reveal.js/plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      //   { src: '../../node_modules/reveal.js/plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
      //   {
      //     src: '../../node_modules/reveal.js/plugin/highlight/highlight.js', async: true, callback: function () {
      //       [].forEach.call(document.querySelectorAll('.highlight, pre code'), function (v, i) {
      //         hljs.highlightBlock(v);
      //       });
      //     }
      //   },
      //   { src: 'plugin/zoom-js/zoom.js', async: true },
      //   { src: 'plugin/notes/notes.js', async: true }
      // ]
    });
  }

}
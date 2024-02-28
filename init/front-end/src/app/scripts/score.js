 // TODO #class: use the ES6 class keyword
import parseUrl from "./utils";
import template from "../views/game.html";

  /* class ScoreComponent constructor */
  export default function ScoreComponent() {
    // TODO #extends: call super(template)
    var params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
    this.template = template;
  }
  // put component in global scope, to be runnable right from the HTML.

  // TODO #class: turn function into a method of ScoreComponent
  /* method ScoreComponent.init */
  ScoreComponent.prototype.init = function init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;
  };
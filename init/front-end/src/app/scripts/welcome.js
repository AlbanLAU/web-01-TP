import template from "../views/welcome.html";
import { Component } from "./component";

  export default class WelcomeComponent extends Component{
    constructor() {
      super(template);
    }

    init() {
      const form = document.querySelector("form.form-signin");
  
      form.addEventListener(
        "submit",
        // TODO #arrow-function: use arrow function instead.
        function (event) {
          event.preventDefault();
          if (form.checkValidity() === false) {
            event.stopPropagation();
            form.classList.add("was-validated");
          } else {
            const name = event.srcElement.querySelector("#nickname").value;
            const size = parseInt(event.srcElement.querySelector("#size").value);
  
            this._startGame(name, size);
          }
        }.bind(this),
        false
      );
  
      return this;
    };

    _startGame(name, size) {
      const gamePage = "./#game";
      // TODO #template-literals:  use template literals (backquotes)
      window.location = gamePage + "?name=" + name + "&size=" + size;
    }

  }
  // put component in global scope, to be runnable right from the HTML.

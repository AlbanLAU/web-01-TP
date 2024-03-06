
import template from "./game.component.html";
import { Component } from "../../scripts/component";
import parseUrl from "../../scripts/utils";

import "./game.component.scss";
import { CardComponent } from "./card/card.component";
 
  const environment = {
    api: {
      host: "http://localhost:8081",
    },
  };


  export default class GameComponent extends Component{
    constructor() {
      super(template);
      const params = parseUrl();
      this._name = params.name;
      this._size = parseInt(params.size) || 9;
      this._flippedCard = null;
      this._matchedPairs = 0;
    }

    init() {
      this.fetchConfig(

        (config) => {
          this._config = config;
          this._boardElement = document.querySelector(".cards");

          this._cards = [];
          this._config.ids.map((id) =>  this._cards.push(new CardComponent(id)));

          this._cards.forEach((card) => {
            this._boardElement.appendChild(card.getElement());
            card.getElement().addEventListener(
              "click",
              () => {
                this._flipCard(card);
              }
            );
          });
          this.start();
        }
      );
    };

    start() {
      this._startTime = Date.now();
      let seconds = 0;
      document.querySelector("nav .navbar-title").textContent =
        `Player: ${this._name}. Elapsed time: ${seconds++}`;
  
      this._timer = setInterval(
        () => {
          document.querySelector("nav .navbar-title").textContent =
            `Player: ${this._name}. Elapsed time: ${seconds++}`;
        },
        1000
      );
    };
    
    async fetchConfig(cb) {
      return await fetch(`${environment.api.host}/board?size=${this._size}`).then(
        (response) => {
          if (response.ok) {
            return response.json().then((data) => {
              cb(data);
            }
          );
        }
      }
      );
    };

    goToScore() {
      const timeElapsedInSeconds = Math.floor(
        (Date.now() - this._startTime) / 1000
      );
      clearInterval(this._timer);
  
      setTimeout(
        () => {
          const scorePage = "./#score";
          window.location =
          `${scorePage}?name=${this._name}&size=${this._size}&time=${timeElapsedInSeconds}`;
        },
        750
      );
    };

    _flipCard(card) {
      if (this._busy) {
        return;
      }
  
      if (card.flipped) {
        return;
      }
      card.flip();

      if (!this._flippedCard) {
        this._flippedCard = card;
      } else {
        if (card.equals(this._flippedCard)) {
          this._flippedCard.matched = true;
          card.matched = true;
          this._matchedPairs += 1;
          this._flippedCard = null;
  
          if (this._matchedPairs === this._size) {
            this.goToScore();
          }
        } else {
          this._busy = true;
  
          setTimeout(
            () => {
              this._flippedCard.flip();
              card.flip();
              this._busy = false;
  
              this._flippedCard = null;
            },
            500
          );
        }
      }
    };
  }

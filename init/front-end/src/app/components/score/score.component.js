import parseUrl from "../../scripts/utils";
import template from "./score.component.html";
import { Component } from "../../scripts/component";
import "./score.component.scss";
import { HightScoresComponent } from "./hightScores/hightScores.component";

const environment = {
  api: {
    host: "http://localhost:8081",
  },
};
  export default class ScoreComponent extends Component{

  constructor() {
    super(template);
    const params = parseUrl();
    this.name = params.name;
    this.size = parseInt(params.size);
    this.time = parseInt(params.time);
  }

  init() {
    document.getElementById("name").innerText = this.name;
    document.getElementById("size").innerText = this.size;
    document.getElementById("time").innerText = this.time;

    this.fetchScores().then(
      (config) => {
        this._config = config;
        this._boardElement = document.querySelector(".hightScores");

        this._scores = [];
        this._config.map((id) =>  this._scores.push(new HightScoresComponent(id)));

        this._scores.forEach((score) => {
          this._boardElement.appendChild(score.getElement());
        });
      }
    );
  };

  async fetchScores() {
    return await fetch(`${environment.api.host}/scores`).then(
      (response) => {
        if (response.ok) {
          return response.json()
      }
    }
    );
  };

}
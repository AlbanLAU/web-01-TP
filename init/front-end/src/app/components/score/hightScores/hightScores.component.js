import { Component } from "../../../scripts/component.js";
import "./hightScores.component.scss";
import template from "./hightScores.component.html";

export class HightScoresComponent extends Component{
    
    constructor(data) {
      super(template);
      this._data = data;
      this._elt = document.createElement("div");
      this._elt.innerHTML = this.template;
      this._elt = this._elt.firstElementChild;
      this.init();
    }

    init() {
        var formattedTime = this._data.time.toFixed(1);

        this._elt.querySelector(".score-name").textContent = this._data.name;
        this._elt.querySelector(".score-size").textContent = this._data.size;
        this._elt.querySelector(".score-time").textContent = formattedTime;
    }

    getElement() {
        return this._elt;
      };
}
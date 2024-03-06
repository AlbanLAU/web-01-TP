import './navBar.component.css';
import template from './navBar.component.html';

export class NavbarComponent extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = template;
    }
}

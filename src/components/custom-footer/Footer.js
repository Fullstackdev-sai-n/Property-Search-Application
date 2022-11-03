import html from "./custom-footer.html";
import css from "./custom-footer.css";
import { setupShadow } from "../../utils/helper";

class Footer extends HTMLElement {

	constructor() {
		super();
		setupShadow(this, html, css);  
	  }
}

customElements.define('custom-footer', Footer);

import { stringToHTML, fetchCache } from "../../utils/utils.js";

class MyComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    async render() {
        this.attachShadow({ mode: 'open' });
        var htmlFragment = await this.fetchTemplate();
        var styleElement = await this.fetchCSS();
        this.shadowRoot.appendChild(styleElement);
        this.shadowRoot.append(htmlFragment);
        // console.log("BORRAME");
    }

    async fetchTemplate() {
        return await fetchCache('components/my-component/my-component.html')
            .then(response => response.text())
            .then(data => stringToHTML(data));
    }

    async fetchCSS() {
        const css = await fetchCache('components/my-component/my-component.css')
            .then(response => response.text())
            .then(data => document.createTextNode(data));
        const styleElement = document.createElement('style');
        styleElement.appendChild(css);
        return styleElement;
    }
}

window.customElements.define("my-component", MyComponent);
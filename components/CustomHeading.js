class SectionHeading extends HTMLElement {
 connectedCallback() {
        const heading = this.attributes.heading.value
        this.innerHTML =  `<style>
        .heading {
            font: var(--heading-font);
            position: relative;
            padding: 0 0 32px 0;
        }
        .heading::before {
            content: "";
            position: absolute;
            width: 40px;
            height: 4px;
            border-radius: 2px;
            bottom: 20px;
            background: var(--secondary);
        }
        </style>
        <div class='heading'>${heading}</div>
        ` 
      }
   
}

customElements.define('section-heading', SectionHeading);

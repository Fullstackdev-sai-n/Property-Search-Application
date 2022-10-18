class PropertiesCard extends HTMLElement {
    connectedCallback() {
           const total = this.attributes.number.value
           const title = this.attributes.title.value
           this.innerHTML =  `<style>
           .image-card {
               background: url('./assets/showcase3.jpg');
               background-repeat: no-repeat;
               background-position: center;
               background-attachment: fixed;
               background-size: cover;
               position: relative;
               height: 184px;
               border-radius: 8px;
               place-items: center;
               
           }

           .image-card-text {
               position: absolute;
               font: var(--title-font);
               color: var(--white);
               bottom:0;
               padding: 24px 24px 56px;
           }

           .image-card-text > span{
               font-size: 24px;
               
           }

           .image-card  > span {
               font-size: 14px;
               position: absolute;
               color: var(--white);
               bottom: 24px;
               left: 24px;
               font-weight: 600;
           }

           .image-card  > span::after {
               content: "";
               position: absolute;
               width: 12px;
               height: 11px;
               background: url(./assets/mb-home-sprite-web.svg) no-repeat;
               background-position-x: 0%;
               background-position-y: 0%;
               background-position: -46px -711px;
               transition: all .6s ease;
               right: -20px;
               top: 4px;
           }

       </style>
       <div class="image-card">
       <div class="image-card-text">
           <span>${total}</span><br/>
           ${title}<br/>
       </div>
       <span>Explore</span>
       </div>
           ` 
         }
      
   }
   
   customElements.define('image-card', PropertiesCard);
   
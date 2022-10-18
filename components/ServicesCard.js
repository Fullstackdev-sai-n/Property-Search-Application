class ServicesCard extends HTMLElement {
    connectedCallback() {
           const title = this.attributes.title.value
           const text = this.attributes.text.value
           this.innerHTML =  `<style>
           .services-card{					
               height: 216px;
               border: 1px solid #d7d7d7;
               border-radius: 8px;
               display: grid;
               grid-template-rows: 1fr 1fr;
           } 

           .services-card > img {
               width: 100%;
               height: 100%;
               border-radius: 8px 8px 0 0;
           }
           .services-card__text-block {
               padding: 16px 24px;
               line-height: 22px;
           }

           .services-card__text-block > div:first-child {
               font: var(--title-font);
               color: var(--text-primary);
               margin-bottom: 5px;
           }
           .services-card__text-block > div:nth-child(2) {
               font: var(--description-font);
               color: var(--text-primary);
               
           }
       </style>
       <div class="services-card">
           <img src="./assets/showcase2.jpg" alt="services-card">
           <div class="services-card__text-block">
               <div class="text-1">
                   ${title}
               </div>
               <div class="text-2">
                   ${text}
               </div>
           </div>
       </div>` 
         }
      
   }
   
   customElements.define('services-card', ServicesCard);
   
class GalleryCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/project-gallery-card.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.pgc-image').attributes[1].value = this.getAttribute('pgcimage');
		  this.shadowRoot.querySelector('.pgc-title').innerHTML = this.getAttribute('title');
		  this.shadowRoot.querySelector('.pgc-area').innerHTML = this.getAttribute('area');
		  this.shadowRoot.querySelector('.pgc-flats').innerHTML = this.getAttribute('flats');
		  this.shadowRoot.querySelector('.pgc-price').innerHTML = this.getAttribute('price');
		  this.shadowRoot.querySelector('.pgc-pjcname').innerHTML = this.getAttribute('projectname');
		  this.shadowRoot.querySelector('.pgc-name').innerHTML = this.getAttribute('prname');
		  this.shadowRoot.querySelector('.gallery__card').addEventListener('mouseover', () => {

			this.shadowRoot.querySelector('.pgc-image').style.transform = 'scale(1.1)';	
		})

		this.shadowRoot.querySelector('.gallery__card').addEventListener('mouseout', () => {
			this.shadowRoot.querySelector('.pgc-image').style.transform = 'scale(1)';
		})
		
		 

        }
  }
  
  customElements.define('gallery-card', GalleryCard);
  

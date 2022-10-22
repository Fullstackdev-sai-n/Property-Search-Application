class HandpickedProjectCard extends HTMLElement {

	async connectedCallback() {
	  let res = await fetch( './templates/components/handpicked-project-card-template.html')
	  this.attachShadow( { mode: 'open' } )
		  .innerHTML = await res.text()
		  this.shadowRoot.querySelector('.hnp-image-content-block-image').attributes[1].value = this.getAttribute('imagemain');
		  this.shadowRoot.querySelector('.hnp-image-content-block-info-top-title').innerHTML = this.getAttribute('projecttitle');
		  this.shadowRoot.querySelector('.hnp-image-content-block-info-top-by-loc').innerHTML = this.getAttribute('marketedby');
		  this.shadowRoot.querySelector('.hnp-image-content-block-info-top-price').innerHTML = this.getAttribute('price');
		  this.shadowRoot.querySelector('image-overlay-play-button').attributes[0].value = this.getAttribute('thumbnail');
		  this.shadowRoot.querySelector('.hnp-image-content-block-info-middle-videos-block-1-text').innerHTML = this.getAttribute('thunmbnailtext');
		  this.shadowRoot.querySelector('.hnp-image-content-block-info-bottom-more-col').innerHTML = this.getAttribute('showcount');
		  this.shadowRoot.querySelector('.hnp-image-content-block').addEventListener('mouseenter', () => {
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle-video-4').style.display = 'block'
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle-video-4-default-display').style.display = 'none'
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle').style.height = '190px'   
            this.shadowRoot.querySelector('.hnp-hover-popup-btn').style.display = 'block'   
            this.shadowRoot.querySelector('.hnp-image-content-block-info-bottom-more-col').style.border = 'none'
            this.shadowRoot.querySelector('.hnp-image-content-block').style.backgroundImage = 'linear-gradient(180deg,transparent,rgba(0,0,0,.47),rgba(0,0,0,.72))'
         
        })
		  this.shadowRoot.querySelector('.hnp-image-content-block').addEventListener('mouseleave', () => {
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle-video-4').style.display = 'none'
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle-video-4-default-display').style.display = 'grid'
            this.shadowRoot.querySelector('.hnp-image-content-block-info-middle').style.height = '70px'
            this.shadowRoot.querySelector('.hnp-hover-popup-btn').style.display = 'none'
            this.shadowRoot.querySelector('.hnp-image-content-block-info-bottom-more-col').style.border = '1px solid #e8e8e8'
            this.shadowRoot.querySelector('.hnp-image-content-block').style.backgroundImage = 'none'
           
          })

       


        }
  }
  
  customElements.define('handpicked-project-card', HandpickedProjectCard);
  
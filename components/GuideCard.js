let GuideEl = document.createElement('template')
GuideEl.innerHTML =`<style>
.guide-card-container {
    height: 348px;
    width: 100%;
    border: 1px solid var(--border-color);
    border-top-color: var(--primary);
    border-radius: 8px;
    display: grid;
    grid-template-rows: 0.6fr 1fr 0.2fr;
}
.guide-card-title {
    padding: 20px 16px 0 16px;
    font: var(--title-font);
    color: var(--text-primary);
}
.guide-card-videos-block {
    display: grid;
    grid-template-rows: 0.6fr 0.3fr 0.1fr;
    padding: 0 16px;
    margin-top: 13px;
}

.guide-card-video {
    width: 100%;
    height: 136px;
    overflow: hidden;
    position: relative;
    column-count: 2;
}

.guide-card-video iframe {
    width: 100%;
    height: inherit;
    border-radius: 8px;
    background-color: var(--border-color);
    
}

.guide-card-video-text {
    width: 100%;
    font-size: 14px;
    color: var(--text-primary);
    line-height: 20px;
    overflow: visible;
    margin: 16px 0;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    column-count: 2;
    
}

.guide-card-bullets-block {
    display: flex;
    justify-content: center;
    
}

.guide-card-bullet {
    width: 8px;
    height: 8px;
    display: inline-block;
    border-radius: 100%;
    background: #000;
    opacity: .2;
    margin-right: 10px;
    

}

.guide-card-see-all {
    padding: 0 16px;
    font: var(--description-font);
    color: var(--primary);
    font-weight: 600;
    
}
</style>
<div class="guide-card-container">
<div class="guide-card-title">Locality Videos</div>
<div class="guide-card-videos-block">
<div class="guide-card-video">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3xRLim5LSsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/3xRLim5LSsE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="guide-card-video-text">
    
    <span>	Dharani Portal 2022-23: View Telangana Land Records @ dharani.telangana.gov.in</span>
    <span>	Dharani Portal 2022-23: View Telangana Land Records @ dharani.telangana.gov.in</span>

</div>
<div class="guide-card-bullets-block">
    <span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span><span class="guide-card-bullet"></span>
</div>
</div>
<div class="guide-card-see-all">See All</div>
<arrow-right></arrow-right>
</div>`;

class GuideCard extends HTMLElement {
    constructor(){
        super()
        const elementsContent = GuideEl.content
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(elementsContent.cloneNode(true))    
    }  
    
    connectedCallback(){
        // this.shadowRoot.querySelector('.guide-card-title').innerText = this.getAttribute('title')
        // this.shadowRoot.querySelector('.guide-card-title').style.display = this.getAttribute('s')
    }
   }
   
   customElements.define('guide-card', GuideCard);
   
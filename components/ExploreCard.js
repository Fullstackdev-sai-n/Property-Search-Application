class ExploreCard extends HTMLElement {
  
    constructor() {
        super();
        this._city = null;
        this._price = null;
        this._rating = null;
        this._reviews = null;
        this._count= null; 
        this._bg= null; 
        this._response = null;

        console.log('constructor', this)
    }

    static get observedAttributes() {

        console.log('Observed', this)
        return ['city', 'price', 'rating', 'reviews', 'count', 'bg'];
    }

    

    attributeChangedCallback(name, oldValue, newValue) {
        if (newValue) {
            switch (name) {
                case 'city': {
                    this._city = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'bg': {
                    this._bg = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'price': {
                    this._price = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'rating' : {
                    this._rating = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'reviews' : {
                    this._reviews = newValue;
                    this.innerHTML = this.render();
                    break;
                }
                case 'count' : {
                    this._count = newValue;
                    this.innerHTML = this.render();
                    break;
                }

            }

            console.log('Changed', this)
        }
    }

      render(){
        console.log('Render', this)
        return `<style>
        .explore-card {
            height: 246px;
            width: 100%;
            border: 1px solid var(--border-color);
            border-top: 2px solid #2fb2cb;
            border-radius: 8px;
            display: grid;
            grid-template-columns: 1fr, 1fr, 1fr;
            align-items: center;
            padding: 0 20px;
        }
    
        .explore-head > span:first-child {
            font: var(--title-font);
            color: var(--text-primary);
            position: relative;
        }
    
        .explore-head > span:first-child::before {
            position: absolute;
            content: "";
            background: url("./assets/mb-home-sprite-web.svg");
            width: 14px;
            height: 14px;
            display: inline-block;
            vertical-align: middle;
            margin-left: 6px;
            background-position-x: 0%;
            background-position-y: 0%;
            background-position: -45px -1027px;
            right: -24px;
            top: 4px;
        }
        .explore-head > span {
            font: var(--description-font);
            color: var(--text-primary);
        }
    
        .explore-reviews {
            display: grid;
            grid-template-columns: 0.2fr 0.3fr;
            font: var(--description-font);
        }
        .explore-reviews > .rating {
            font-weight: 600;
            position: relative;
        }
        .explore-reviews > .rating::after {
            content: "";
            position: absolute;
            background: url("./assets/mb-home-sprite-web.svg");
            width: 16px;
            height: 16px;
            left: 25px;
            top: 0;
            background-position-x: 0%;
            background-position-y: 0%;
            background-position: -45px -1065px;
        }
    
        .explore-sales {
            width: calc(100% - 32px);
            height: 34px;
            padding: 34px 12px 12px;
            border-radius: 8px;
            position: relative;
        }
        .explore-sales::before {
            content: "";
            position: absolute;
            background: url("./assets/showcase3.jpg");
            width: 56px;
            height: 56px;
            border-radius: 50%;
            background-repeat: no-repeat;
            background-position: center;
            top: -20px;
        }
    
        .explore-sales > span {
            line-height: 3;
            color: var(--primary);
            font-weight: 600;
        }
    </style>
    <div class="explore-card">
        <div class="explore-head">
            <span class="explore-card-city">${this.city}</span><br />
            <span class="explore-card-price"> ${this.price} </span>
        </div>
        <div class="explore-reviews">
            <div class="rating">${this.rating}</div>
            <div class="review">${this.reviews}Reviews</div>
        </div>  
        <div part='bg-part' class="explore-sales">
            <span class="explore-card-">${this.count} properties for sale</span>

        </div>
    </div>
    `
    
      }

      set city(value) {
        this.setAttribute('city', value);
    }

    get city() {
        return this._city;
    }

    set price(value) {
        this.setAttribute('price', value);
    }

    get price() {
        return this._price;
    }

    set rating(value) {
        this.setAttribute('rating', value);
    }

    get rating() {
        return this._rating;
    }

    set reviews(value) {
        this.setAttribute('reviews', value);
    }

    get reviews() {
        return this._reviews;
    }
    set count(value) {
        this.setAttribute('count', value);
    }

    get count() {
        return this._count;
    }
    set bg(value) {
        this.setAttribute('bg', value);
    }

    get bg() {
        return this._bg;
    }
      
   }
   
   customElements.define('explore-card', ExploreCard);
   
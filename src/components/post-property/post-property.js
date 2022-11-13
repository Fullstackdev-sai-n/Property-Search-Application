import html from "./post-property.html";
import css from "./post-property.css";
import { setupShadow } from "../../utils/helper";





class PostProperty extends HTMLElement {

  constructor() {
		super();
		setupShadow(this, html, css);  

	  }
    async connectedCallback() {

     

   
      
      //Retrieve the data

         
      const mapElementAttributes = [
        { 
            placeholder:"Property Name",
            type:"text",
            title:"title",
            name:"title",
            label:"Property Name",
            required:"true",
            
          },
              { 
              placeholder:"Property Description",
            type:"text",
            title:"Property Description",
            name:"Property Description",
            label:"Property Description",
            required:"true"},
              { 
              placeholder:"Project By",
            type:"text",
            title:"Project By",
            name:"Project By",
            label:"Project By",
            },
              { 
              placeholder:"Property Location",
            type:"text",
            title:"Property Location",
            name:"Property Location",
            label:"Property Location",
            required:"true"},
              { 
              placeholder:"Property Marketed By",
            type:"text",
            title:"Property Marketed By",
            name:"Property Marketed By",
            label:"Property Marketed By",
            },
              { 
              placeholder:"Property Dimensions",
            type:"text",
            title:"Property Dimensions",
            name:"Property Dimensions",
            label:"Property Dimensions",
            required:"true"},
              { 
              placeholder:"Property Cost",
            type:"text",
            title:"Property Cost",
            name:"Property Cost",
            label:"Property Cost",
            required:"true"},
              { 
           
        placeholder:"Property Price Range from to",
            type:"text",
            title:"Property Price Range from to",
            name:"Property Price Range from to",
            label:"Property Price Range",
            },
              { 
              placeholder:"Property City",
            type:"text",
            title:"Property City",
            name:"Property City",
            label:"Property City",
            required:"true"},
              { 
              placeholder:"Property Rating",
            type:"text",
            title:"Property Rating",
            name:"Property Rating",
            label:"Property Rating",
            },
              { 
              placeholder:"Property Image",
            type:"text",
            title:"Property Image",
            name:"Property Image",
            label:"Property Image",
            required:"true"},
              { 
              placeholder:"Property Reviews",
            type:"text",
            title:"Property Reviews",
            name:"Property Reviews",
            label:"Property Reviews",
            },
              { 
              placeholder:"Property for sale count",
            type:"text",
            title:"Property for sale count",
            name:"Property for sale count",
            label:"Property for sale count",
            },
              { 
              placeholder:"Property Status",
            type:"text",
            title:"Property Status",
            name:"Property Status",
            label:"Property Status",
            },
              { 
              placeholder:"Property launch",
            type:"text",
            title:"Property launch",
            name:"Property launch",
            label:"Property launch",
            },
              { 
              placeholder:"Property launchCaption",
            type:"text",
            title:"Property launchCaption",
            name:"Property launchCaption",
            label:"Property launchCaptione",
            },
              { 
            placeholder:"Property Name",
            type:"text",
            title:"Property Name",
            name:"Property Name",
            label:"Property Name",
            },
          
          ]

        
          this.shadowRoot.querySelector('.form-el').insertAdjacentHTML('afterbegin', mapElementAttributes.map((entry, index) => {

            
            return `<custom-input
          type="${entry.type}"
          placeholder="${entry.placeholder}"
          title="${entry.title}"
          name="${entry.name}"
          label="${entry.label}"
          required="${entry.required ? entry.required : ''}"
          class="custom-class custom-class-${index}"
          value=""
          inputClass='newClass-${index}'
          >
          </custom-input>`
        
        }).join(''))
                  

     this.shadowRoot.querySelector('.form-el').addEventListener('submit', (e) => {

      e.preventDefault()

      const postData = readFormData(this.shadowRoot)

      fetch('http://localhost:3001/property', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: { 
              'Content-Type': 'application/json',
            }
          }).then((response) => response.json()).then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });



     
     }) 

     function readFormData(shadow) {
      var formData = {};
      formData["title"] = shadow.querySelector('.custom-class-0').shadowRoot.querySelector("input").value;
      formData["body"] = shadow.querySelector('.custom-class-1').shadowRoot.querySelector("input").value;
      formData["name"] = shadow.querySelector('.custom-class-2').shadowRoot.querySelector("input").value;
      formData["by"] = shadow.querySelector('.custom-class-3').shadowRoot.querySelector("input").value;
      formData["loc"] = shadow.querySelector('.custom-class-4').shadowRoot.querySelector("input").value;
      formData["marketedby"] = shadow.querySelector('.custom-class-5').shadowRoot.querySelector("input").value;
      formData["size"] = shadow.querySelector('.custom-class-6').shadowRoot.querySelector("input").value;
      formData["price"] = shadow.querySelector('.custom-class-7').shadowRoot.querySelector("input").value;
      formData["range"] = shadow.querySelector('.custom-class-8').shadowRoot.querySelector("input").value;
      formData["city"] = shadow.querySelector('.custom-class-9').shadowRoot.querySelector("input").value;
      formData["rating"] = shadow.querySelector('.custom-class-10').shadowRoot.querySelector("input").value;
      formData["imageUrl"] = shadow.querySelector('.custom-class-11').shadowRoot.querySelector("input").value;
      formData["totalReviews"] = shadow.querySelector('.custom-class-12').shadowRoot.querySelector("input").value;
      formData["forSaleCount"] = shadow.querySelector('.custom-class-13').shadowRoot.querySelector("input").value;
      formData["status"] = shadow.querySelector('.custom-class-14').shadowRoot.querySelector("input").value;
      formData["launchText"] = shadow.querySelector('.custom-class-15').shadowRoot.querySelector("input").value;
      formData["launchCaption"] = shadow.querySelector('.custom-class-16').shadowRoot.querySelector("input").value;
      return formData;
  }
     function resetForm(shadow) {
      shadow.querySelector('.custom-class-0').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-1').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-2').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-3').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-4').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-5').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-6').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-7').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-8').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-9').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-10').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-11').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-12').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-13').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-14').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-15').shadowRoot.querySelector("input").value = ''
shadow.querySelector('.custom-class-16').shadowRoot.querySelector("input").value = ''
  }
          


       
    }
  }
  
  customElements.define('post-property', PostProperty);

export const setupShadow = (element, html, css) => {
    const shadow = element.attachShadow({ mode: "open" });
    const template = document.createElement("template");
    template.innerHTML = '<style>@import "index.css";' + css +  "</style>" + attachCallbacks(html, element);
    const templateContent = template.content;
    shadow.appendChild(templateContent.cloneNode(true));
  };
  
  const attachCallbacks = (html, element) => {
    const lastId = Window.lastComponentId ? Window.lastComponentId : 0;
    const componentId = lastId + 1;
    Window.lastComponentId = componentId;
  
    const componentName = "component" + componentId;
    Window[componentName] = element;
    return html.replaceAll("this.", "Window." + componentName + ".");
  };



  //function on adding scroll animations to the pages

  export function scrollObserver(elementClass, animationClass, shadow){
    const observer = new IntersectionObserver(entries => {

      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add(animationClass) 
          console.log(entry)
        return ;
      }

      entry.target.classList.remove(animationClass) 
      
      })

    })

    observer.observe(shadow.querySelector(elementClass))

  }


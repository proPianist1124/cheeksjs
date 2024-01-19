import { create, error } from "./helpers.js"
import { components } from "./components.js"

// routing
export function router(routes){
    if(typeof routes != "object"){
        error("Router must be an object")
    }else{
        for(let i=0; i<routes.length; i++){
            if(window.location.pathname == `${routes[i].route}/`){
                let pages = []
                eval(`
                    ${create.toString()}
                    ${components()}
                    ${routes[i].page}
                    const content = ${routes[i].page.name}();
                    for(let i=0; i<content.length; i++){
                        pages.push(content[i])
                    }
                `)
                document.body.outerHTML = pages.join("")
            }
        }
    }
}


// miscellaneous

export function title(title){
    if(title == undefined){
        error("Title must have content inside")
    }else{
        document.title = title
    }
}

export function br(){
    return `<br>`
}

export function script(text){
    const script_element = document.createElement("script")

    script_element.setAttribute("type", "text/javascript")

    if(text != undefined && typeof text == "object"){
        for(let i=0; i<Object.keys(text).length; i++){
            script_element.setAttribute(Object.keys(text)[i], eval(`text.${Object.keys(text)[i]}`))
        }
    }else if(text != undefined){
        script_element.innerHTML = text
    }

    document.body.appendChild(script_element)
}
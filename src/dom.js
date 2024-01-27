import { create, error, create_components } from "./helpers.js"
import { elements } from "./elements.js"

// routing
export function router(routes, components){
    try{
        if(typeof routes != "object" || components != undefined && typeof components != "object"){
            error("Values in router must be an object")
        }else{
            for(let i=0; i<Object.keys(routes).length; i++){
                let route = Object.keys(routes)[i]
    
                if(route != "/"){
                    route = `${Object.keys(routes)[i]}/`
                }
                if(window.location.pathname == route){
                    let pages = []
                    
                    
                    eval(`
                        ${create}
                        ${elements()}
                        ${components ? create_components(components) : ""}
                        ${routes[Object.keys(routes)[i]]}
    
                        const content = ${routes[Object.keys(routes)[i]].name}()
                        for(let i=0; i<content.length; i++){
                            if(typeof content[i] == "object"){
                                for(let f=0; f<content[i].length; f++){
                                    if(content[i][f] == null || content[i][f] == undefined){
                                        content[i].splice(f, 1)
                                    }
                                }
                            }
                            pages.push(content[i])
                        }
                    `)
                    pages = String(pages.join(""))
                    document.body.outerHTML = pages
                }
            }
        }
    }catch(e){
        error(e)
    }
}


// other
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
    return null
}
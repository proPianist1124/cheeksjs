import { create, error } from "./helpers.js"

// routing
export function router(routes){
    if(typeof routes != "object"){
        error("Router must be an object")
    }else{
        for(let i=0; i<routes.length; i++){
            if(typeof routes[i].page != "object"){
                error("'Routes' attribute must be an 'object'")
            }else{
                if(window.location.pathname == `${routes[i].route}/`){
                    let pages = []

                    eval(`
                        ${routes[i].page[1]}
                        const content = ${routes[i].page[0]}();
                        for(let i=0; i<content.length; i++){
                            pages.push(content[i])
                        }
                    `)
                    document.body.outerHTML = pages.join("")
                }
            }
        }
    }
}

// text blocks
let headings = []
for(let i=0; i<6; i++){
    if(i == 0){
        headings[i] = ""
    }else{
        headings[i] = function heading(text, attr){
            return create(`h${i}`, text, attr)
        }
    }
}
export const h = headings

export function p(text, attr){
    return create("p", text, attr)
}

export function a(text, attr){
    return create("a", text, attr)
}

export function span(text, attr){
    return create("span", text, attr)
}

export function b(text, attr){
    return create("b", text, attr)
}

export function div(text, attr){
    return create("div", text, attr)
}

// misc
export function title(title){
    if(title == undefined){
        error("Title must have content inside")
    }else{
        return `<title>${title}</title>`
    }
}

export function link(attr){
    const link_element = document.createElement("LINK")

    if(typeof attr != "object"){
        error(`Attributes can not be of '${typeof attr}' type`)
    }else{
        for(let i=0; i<Object.keys(attr).length; i++){
            //link_element.setAttribute()
            link_element.setAttribute(Object.keys(attr)[i], eval(`attr.${Object.keys(attr)[i]}`))
        }
        document.head.appendChild(link_element)
    }
}

export function br(){
    return `<br>`
}

export function hr(){
    return `<hr>`
}

export function code(text, attr){
    return create("code", text, attr)
}

export function pre(text, attr){
    return create("pre", text, attr)
}

export function img(attr){
    const img_element = document.createElement("img")

    if(attr != undefined && typeof attr == "object"){
        for(let f=0; f<Object.keys(attr).length; f++){
            img_element.setAttribute(Object.keys(attr)[f], eval(`attr.${Object.keys(attr)[f]}`))
        }
    }else{
        error("Image elements must have 'object' typeattributes")
    }

    return img_element.outerHTML
}

export function script(text){
    const script_element = document.createElement("script")

    script_element.setAttribute("type", "text/javascript")

    if(text != undefined && typeof text == "object"){
        for(let f=0; f<Object.keys(text).length; f++){
            script_element.setAttribute(Object.keys(text)[f], eval(`text.${Object.keys(text)[f]}`))
        }
    }else if(text != undefined){
        script_element.innerHTML = text
    }

    document.body.appendChild(script_element)
}
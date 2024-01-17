// helpers
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

function create(type, text, attr){
    const element = document.createElement(type)

    if(attr != undefined && typeof attr == "object"){
        const list = Object.keys(attr)

        for(let i=0; i<list.length; i++){
            element.setAttribute(list[i], eval(`attr.${list[i]}`))
        }
    }else if(attr != undefined && typeof attr != "object"){
        error(`Attributes can not be of '${typeof attr}' type`)
    }

    if(text != undefined){
        if(typeof text == "object"){
            element.innerHTML = text.join("")
        }else{
            element.innerHTML = text
        }
    }

    return element.outerHTML
}

function error(e){
    document.body.innerHTML = ""
    document.title = e

    const error_msg = document.createElement("div")

    error_msg.setAttribute("style", "margin:auto; padding:20px 20px; background-color:#232b2b; max-width:750px; margin-top:50px; border-radius:10px; text-align:center;")
    error_msg.innerHTML = `<h2 style = "color:#FB3227; font-family:arial;">${e}</h2>`

    document.body.appendChild(error_msg)
	throw(e)
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
        const names = Object.keys(attr)
        for(let i=0; i<names.length; i++){
            //link_element.setAttribute()
            link_element.setAttribute(names[i], eval(`attr.${names[i]}`))
        }
        document.head.appendChild(link_element)
    }
    //return create("link", undefined, attr)
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

export function img(text, attr){
    return create("img", text, attr)
}
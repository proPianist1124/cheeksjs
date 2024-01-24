export function create(type, tag, text, attr){
    const element = document.createElement(tag)

    switch(type){
        case "multi":
            if(attr != undefined && typeof attr == "object"){
                for(let i=0; i<Object.keys(attr).length; i++){
                    if(Object.keys(attr)[i] == "onclick"){
                        element.setAttribute(Object.keys(attr)[i], `${eval(`attr.${Object.keys(attr)[i]}`).name}(); ${eval(`attr.${Object.keys(attr)[i]}`)}`)
                    }else{
                        element.setAttribute(Object.keys(attr)[i], eval(`attr.${Object.keys(attr)[i]}`))
                    }
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
        case "single":
            if(attr != undefined && typeof attr == "object"){
                for(let f=0; f<Object.keys(attr).length; f++){
                    element.setAttribute(Object.keys(attr)[f], eval(`attr.${Object.keys(attr)[f]}`))
                }
            }else if(attr == undefined && text != undefined){
                element.setAttribute("type", "text/css")
                element.innerHTML = text
            }else{
                error("Something went wrong")
            }
            if(tag == "link"){
                document.head.appendChild(element)

                // some preloading stuff going on here in the future to make shit fastser
            }else{
                return element.outerHTML
            }
            return ""
    }
}

export function create_components(components){
    if(typeof components != "object"){
        error(`Components must be of 'object' type`)
    }else{
        let component_list = []
        for(let i=0; i<components.length; i++){
            component_list.push(components[i])
        }
        return component_list.join("")
    }
}

export function error(e){
    document.body.innerHTML = ""
    document.title = e

    const error_msg = document.createElement("div")

    error_msg.setAttribute("style", "margin:auto; padding:20px 20px; background-color:#232b2b; max-width:750px; margin-top:50px; border-radius:10px; text-align:center;")
    error_msg.innerHTML = `<h2 style = "color:#FB3227; font-family:arial;">${e}</h2>`

    document.body.appendChild(error_msg)
	throw(e)
}
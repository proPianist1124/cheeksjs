export function components(){
    let component_list = []

    const elements = [
        { tag:"h1", type:"multi" },
        { tag:"h2", type:"multi" },
        { tag:"h3", type:"multi" },
        { tag:"h4", type:"multi" },
        { tag:"h5", type:"multi" },
        { tag:"h6", type:"multi" },
        { tag:"p", type:"multi" },
        { tag:"a", type:"multi" },
        { tag:"b", type:"multi" },
        { tag:"span", type:"multi" },
        { tag:"div", type:"multi" },
        { tag:"code", type:"multi" },
        { tag:"pre", type:"multi" },
        { tag:"img", type:"single" },
        { tag:"form", type:"multi" },
        { tag:"input", type:"multi" },
        { tag:"button", type:"multi" },
        { tag:"nav", type:"multi" },
        { tag:"ul", type:"multi" },
        { tag:"li", type:"multi" },
        { tag:"tr", type:"multi" },
        { tag:"td", type:"multi" },
        { tag:"th", type:"multi" },
        { tag:"hr", type:"multi" },
        { tag:"meta", type:"single" },
        { tag:"link", type:"single" },
        { tag:"style", type:"multi"},
    ]

    for(let i=0; i<elements.length; i++){
        if(elements[i].type == "multi"){
            component_list.push(`function ${elements[i].tag}(text, attr){return create("${elements[i].type}", "${elements[i].tag}", text, attr)}`)
        }else if(elements[i].type == "single"){
            component_list.push(`function ${elements[i].tag}(attr){return create("${elements[i].type}", "${elements[i].tag}", null, attr)}`)
        }
    }
    return component_list.join("")
}
export function elements(){
    let element_list = []

    const tags = [
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
        { tag:"hr", type:"single" },
        { tag:"meta", type:"single" },
        { tag:"link", type:"single" },
        { tag:"style", type:"multi"},
    ]

    for(let i=0; i<tags.length; i++){
        if(tags[i].type == "multi"){
            element_list.push(`function ${tags[i].tag}(text, attr){return create("${tags[i].type}", "${tags[i].tag}", text, attr)}`)
        }else if(tags[i].type == "single"){
            element_list.push(`function ${tags[i].tag}(attr){return create("${tags[i].type}", "${tags[i].tag}", null, attr)}`)
        }
    }
    return element_list.join("")
}
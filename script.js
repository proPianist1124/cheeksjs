import { router, meta, link, title, h, p, span, a, br, code, img, script } from "./src/dom.js"

function index(){
    return[
        meta({ charset:"utf-8" }),
        meta({ name:"viewport", content:"width=device-width, initial-scale=1.0" }),
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"https://i.pinimg.com/originals/f0/66/df/f066df8e2e1b5ade03bc50c48e159c3f.gif"
        }),
        link({
            rel:"stylesheet",
            href:"/public/styles/style.css"
        }),
        link({
            rel:"stylesheet",
            href:"/public/styles/prism.css"
        }),
        title("CheeksJS"),
        h[1]([
            span("Cheeks", { style:"font-style:italic" }),
            "JS Framework",
            span(" releasing soon", { style:"font-size:13px; color:red;" })
        ]),
        p([
            "A frontend framework where you can write every single page of your site in one file - ",
            a("Github", { href:"https://github.com/propianist1124/cheeksjs", target:"_blank" })
        ]),
        h[2]("Documentation"),
        h[3]("1. Getting Started"),
        p("Run this into your terminal"),
        code("git clone https://github.com/proPianist1124/cheeksjs.git" , { class:"language-js" }),
        br(),
        h[3]("2. Components Guide"),
        p("Import HTML5 components as if you were importing functions in JS"),
        code(`import { h, p, span, a, br, script, img } from "./src/dom.js"`, { class:"language-js" }),
        br(),
        h[3]("3. Routing"),
        p("This is the most important part - importing the router. Next, use the 'router' function and inside create an array of objects. Each object should have a 'route' and 'page' property. The 'route' property is the path of the page and the 'page' property is an array with the first element being the name of the page and the second element being the function that returns the page."),
        code(`import { router, h, p, a, br } from "./src/dom.js"

function index(){ // use functions like this to render pages
    return [
        h[1]("example heading"), // h1 tag
        p("page") // p tag with some styling
    ]
}

function about(){
    return [
        h[1]("about page"), // yet another h1 tag
        p([
            "this is the about page!!!11",
            br(), // line break tag
            a("index page", { href:"/" }) // a nested link tag
        ])
    ]
}

router([
    {
        route:"",
        page:["index", index],
    },
    {
        route:"/about",
        page:["about", about],
    },
])
            `
        , { class:"language-js" }),
        p([
            "If the page you're writing is the index page, then the 'route' property should be an empty string (as shown above). If the page you're writing is a subpage, then the 'route' property should be the path of the page.",
            br(), br(),
            "The 'page' attribute should always be an array. The first element should be the name of the page's function. The second element should be the function itself.",
        ]),
        br(),
        h[3]("4. The Basics"),
        p("Some basic syntax for components"),
        code(`p("some random text", { style:"color:red", class:"test_class", id:"test_id" })`, { class:"language-js" }),
        p("The code block above shows text with some in-text styling. You can also add other attributes, like 'class', 'id', 'href', etc."),
        code(`p([
    a("test link", { href:"/" }), // a link tag
    "some random text" // p text
], { style:"color:red" }) // you can continue to add other attributes inside this component`, { class:"language-js" }),
        p("The code block above shows components nested inside components. The structure is an array of components."),
        script({ src:"/src/prism.js" })
    ]
}

function test_page(){
    return [
        p("test page real"),
        img({ src:"/public/joe.png", alt:"test" })
    ]
}

router([
    {
        route:"",
        page:["index", index],
    },
    {
        route:"/test_page",
        page:["test_page", test_page],
    }
])
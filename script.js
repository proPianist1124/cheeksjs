import { router } from "./src/dom.js"

function meta(){
    return [
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"/public/img/favicon.ico"
        }),
        link({
            rel:"stylesheet",
            href:"/public/styles/style.css"
        }),
        link({
            rel:"stylesheet",
            href:"/public/styles/prism.css"
        }),
    ]
}

function navbar(){
    return [
        script({ src:"/src/prism.js" }),
        div([
            a(span("Home", { style:"font-weight:bold" }), { href:"/" }),
            span("Documentation", { style:"font-weight:bold" }),
            a(span("> Getting Started", { class:"secondary" }), { href:"/docs/getting-started" }),
            a(span("> Routing", { class:"secondary" }), { href:"/docs/routing" }),
            a(span("> Basics", { class:"secondary" }), { href:"/docs/basics" })
        ], { class:"sidenav"})
    ]
}

function index(){
    return [
        meta(),
        title("HydroJS"),
        navbar(),
        div([
            h1([
                span("Hydro", { style:"font-style:italic" }),
                "JS Framework",
                span("IN BETA", { style:"margin-left:10px; font-size:13px; text-decoration:underline; color:var(--text);" })
            ], { style:"text-align:center; font-size:45px;" }),
            p("The frontend framework where one can write every single page of your site inside a single shitty file", { style:"text-align:center; color:var(--text-secondary);" }),
            div([
                a(
                    button(
                        "Getting Started", { class:"secondary" }
                    ), { href:"/docs/getting-started" }
                ),
                a(
                    button(
                        "Github Repo", { style:"margin-left:10px" }
                    ), { href:"https://github.com/propianist1124/hydrojs", target:"_blank"}
                )
            ], { style:"display:flex; align-items:center; justify-content:center;" })
        ], { class:"main" })
    ]
}

function getting_started_docs(){
    return [
        meta(),
        title("Getting Started - HydroJS"),
        navbar(),
        div([
            h1("Getting Started"),
            p([
                "Run this into your terminal to clone our ",
                b("our documentation site "),
                "as a template (an optional step)."
            ]),
            code("git clone https://github.com/proPianist1124/hydrojs.git" , { class:"language-js" }),
        ], { class:"main" }),
    ]
}

function routing_docs(){
    return [
        meta(),
        title("Routing - HydroJS"),
        navbar(),
        div([
            h1("Routing"),
            p("This is the most important part - importing the router in the file 'script.js'. Use the 'router' function and inside create an array of objects. Each object should have a 'route' and 'page' property."),
            code(`import { router } from "https://hydrojs.pages.dev/src/dom.js"

function index(){ // use functions like this to render pages
    return [
        h1("example heading"), // h1 tag
        p("page") // p tag with some styling
    ]
}
    
function about(){
    return [
        h1("about page"), // yet another h1 tag
        p([
            "this is the about page!!!11",
            br(), // line break tag
            a("index page", { href:"/" }) // a nested link tag
        ])
    ]
}
    
router([ index, about ])`, { class:"language-js" }),
            p([
                "If the page you're writing is the index page, then the 'route' property should be an empty string (as shown above). If the page you're writing is a subpage, then the 'route' property should be the path of the page.",
                br(), br(),
                "The 'page' property should be the name of the function of the page that's going to be rendered.",
            ]),
        ], { class:"main" })
    ]
}

function basics_docs(){
    return [
        meta(),
        title("Basics - HydroJS"),
        navbar(),
        div([
            h1("The Basics"),
            p("Some basic syntax for components"),
            code(`p("some random text", { style:"color:red", class:"test_class", id:"test_id" })`, { class:"language-js" }),
            p("The code block above shows text with some in-text styling. You can also add other attributes, like 'class', 'id', 'href', etc."),
            code(`p([
    a("test link", { href:"/" }), // a link tag
    "some random text" // p text
], { style:"color:red" }) // you can continue to add other attributes inside this component`, { class:"language-js" }),
            p("The code block above shows components nested inside components. The structure is an array of components."),
            br(),
            h3("4. Functions"),
            p("It's also possible for you to have functions inside components. Below is an example:"),
            code(`function index(){
    function click(){
        alert("yay")
    }
    button("click me!", { onclick:click })
}`, { class:"language-js" }),
        ], { class:"main" })
    ]
}

function test_page(){
    function asdf(){
        alert("greetings!")
    }
    return [
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"/public/img/joe.png"
        }),
        title("teste page"),
        h1("congrats! you made found an easter egg!"),
        a(button("go back to main page ➡️"), { href:"/", style:"margin-right:10px" }),
        button("🧪 test a function!", { onclick:asdf }),
        br(), br(),
        img({ src:"/public/img/joe.png", alt:"my boy joe" }),
        br(),
        style(`
            body{
                background-color:#000;
                color:#fff;
                font-family:helvetica;
            }
        `)
    ]
}

router(
    {
        "/":index,
        "/docs/getting-started":getting_started_docs,
        "/docs/routing":routing_docs,
        "/docs/basics":basics_docs,
        "/test_page":test_page
    },
    [
        meta,
        navbar
    ]
)
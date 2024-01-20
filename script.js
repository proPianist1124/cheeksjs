import { router } from "./src/dom.js"

function index(){
    return[
        meta({ charset:"utf-8" }),
        meta({ name:"viewport", content:"width=device-width, initial-scale=1.0" }),
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
        title("CheeksJS"),
        h1([
            span("Cheeks", { style:"font-style:italic" }),
            "JS Framework",
            span(" releasing soon", { style:"font-size:13px; color:red;" })
        ]),
        p([
            "A frontend framework where you can write every single page of your site in one file - ",
            a("Github", { href:"https://github.com/propianist1124/cheeksjs", target:"_blank" })
        ]),
        h2("Documentation"),
        h3("1. Getting Started"),
        p("Run this into your terminal"),
        code("git clone https://github.com/proPianist1124/cheeksjs.git" , { class:"language-js" }),
        br(),
        h3("2. Routing"),
        p("This is the most important part - importing the router. Use the 'router' function and inside create an array of objects. Each object should have a 'route' and 'page' property."),
        code(`import { router } from "./src/dom.js"

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

router([
    {
        route:"",
        page:index,
    },
    {
        route:"/about",
        page:about,
    },
])
            `
        , { class:"language-js" }),
        p([
            "If the page you're writing is the index page, then the 'route' property should be an empty string (as shown above). If the page you're writing is a subpage, then the 'route' property should be the path of the page.",
            br(), br(),
            "The 'page' property should be the name of the function of the page that's going to be rendered.",
        ]),
        br(),
        h3("3. The Basics"),
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
}
        `, { class:"language-js" }),
        script({ src:"/src/prism.js" })
    ]
}

function test_page(){
    function asdf(){
        alert("the function works!!")
    }
    return [
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"/public/img/joe.png"
        }),
        title("teste page"),
        h1("this da test page real"),
        a(button("go back to main page ➡️"), { href:"/" }),
        br(), br(),
        img({ src:"/public/img/joe.png", alt:"my boy joe" }),
        br(),
        button("test a function!", { onclick:asdf }),
        style(`
            body{
                background-color:#000;
                color:#fff;
                font-family:helvetica;
            }
            button{
                background-color:#fff;
                color:#000;
                border-radius:5px;
                border:none;
                padding:10px 20px;
            }
            button:hover{
                cursor:pointer;
                background-color:gray;
            }
        `)
    ]
}

router([
    {
        route:"",
        page:index,
    },
    {
        route:"/test_page",
        page:test_page,
    }
])
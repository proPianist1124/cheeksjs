import { router, title, link, h, p, span, a, br, script, code, img } from "./src/dom.js"

function index(){
    return[
        link({
            rel:"icon",
            type:"image/x-icon",
            href:"https://i.pinimg.com/originals/f0/66/df/f066df8e2e1b5ade03bc50c48e159c3f.gif"
        }),
        link({
            rel:"stylesheet",
            href:"/public/style.css"
        }),
        title("CheeksJS"),
        h[1]([
            span("Cheeks", { style:"font-style:italic" }),
            "JS Framework"
        ]),
        p([
            "MIT Licensed - Feel free to take the code or contribute to our ",
            a("Github", { href:"https://github.com/proPianist1124/cheeksjs", target:"_blank" })
        ], { style:"font-style:italic" }),
        p("A frontend framework where you can write every single page of your site in one file"),
        h[2]("Documentation"),
        h[3]("Getting Started: run this into your terminal"),
        br(),
        code("git clone https://github.com/proPianist1124/cheeksjs.git"),
        br(),
        h[3]("Components: run this into your terminal"),
        br(),
        code("git clone https://github.com/proPianist1124/cheeksjs.git"),
        br(),
        //script({ src:"/public/script.js" })
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
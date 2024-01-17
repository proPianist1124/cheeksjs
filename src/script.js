import { router, title, link, h, p, span, a, br, code } from "./helper.js"

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
            a("Github", { href:"https://github.com", target:"_blank" })
        ]),
        br(),
        h[2]("Documentation"),
        p("Getting Started: run this into your terminal"),
        code("git clone ")
    ]
}

router([
    {
        route:"",
        page:["index", index],
    },
    {
        route:"/test_page",
        page:["index", index],
    }
])
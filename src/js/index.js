import Router from "./routes/router"
//linked to the web document; inject our app into the html
console.log("temp")

const app = document.querySelector('#app')
Router(window.location.pathname)
import Router from "./routes/router";
import dataFetcher from "./utils/dataFetcher";
import { createStore } from "./redux/store";
import keyGenerator from "./utils/key";

//linked to the web document; inject our app into the html
const onAppInit = async function(e){
    const app = document.querySelector('#app')
    let toDos = await dataFetcher('./data/todos.json')

    //If todo items didn't have a unique id (not necessary for current version of the project, but good to know and may be adjusted for next version)
    if(toDos[0].id === undefined) {
        toDos = [...keyGenerator(toDos)]
    }

    createStore(toDos)

    Router(window.location.pathname)
}

window.addEventListener('load', onAppInit)
import makeElement from "./../utils/makeElement";
import addButton from "./ui/addToDo";

const appBar = function(className="app-bar") {
    const appBarTemplate = `<div class="${className}"></div>`
    const element = makeElement(appBarTemplate)

    element.append(addButton("add-btn", ""))
    
    return element
}

export default appBar
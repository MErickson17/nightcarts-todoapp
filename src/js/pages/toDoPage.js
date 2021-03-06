import branding from "./../components/ui/branding";
import todoList from "./../components/ui/todoList";
import todoTemplate from "./../components/templates/todoItem";
import appBar from "./../components/ui/appBar";
import { getStore } from "./../redux/store";
import Router from "./../routes/router";
import categoryLegend from "../components/templates/categoryLegend";


//the todo list page
const toDoPage = function() {
    const todoData = getStore();

    const toDoContent = document.createElement('div') //container for the page
    const brand = branding()
    const legend = categoryLegend()
    const listContainer = todoList('ui-list');

    //Cleaning up event handlers when changing pages
    function cleanUp(){
        const todos = toDoContent.querySelectorAll('li')
        todos.forEach((todo)=>{
            todo.removeEventListener('click', onDeleteTodo)
            todo.removeEventListener('click', onEditTodo)
            toDoContent.querySelector('#add').removeEventListener('click', onAddTodo)
        })
    }

    // EVENT HANDLER FOR DELETE
    function onDeleteTodo (e) {
        // pass the todo through as data
        const todoId = e.currentTarget.parentElement.parentElement.dataset.key
        const todoItem = getStore().filter((todo) => todo.id === todoId)
        cleanUp()
        Router('/delete', todoItem[0])
    }

    // EVENT HANDLER FOR EDIT
    function onEditTodo (e) {
        const todoId = e.currentTarget.parentElement.parentElement.dataset.key
        const todoItem = getStore().filter((todo) => todo.id === todoId)
        cleanUp()
        Router('/edit', todoItem[0])
    }

    // EVENT HANDLER FOR ADD
    function onAddTodo (e) {
        cleanUp()
        Router('/add')
    }
    
    //fetch the data and place it into a store
    //do a foreach loop to render the list item for each todo entry
    //append each list item to the list container (ul)
    function render() {
        if (todoData !== null) {
            const elements = todoData.map(item => todoTemplate(item))
            elements.forEach(element => {
                
                element.querySelector('#delete').addEventListener('click', onDeleteTodo)
                element.querySelector('#edit').addEventListener('click', onEditTodo)
                listContainer.append(element)
            })
        }
        toDoContent.append(brand)
        toDoContent.append(legend)
        toDoContent.append(listContainer)
        toDoContent.append(appBar())
        toDoContent.querySelector('#add').addEventListener('click', onAddTodo)
    }

    render()
    return toDoContent
}

export default toDoPage
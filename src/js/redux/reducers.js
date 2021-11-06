import {getStore, updateStore} from './store'



function reducer (action){

    switch(action.type){
        case "delete":
            const store = getStore()
            const index = action.payload.index;         
            const newStore = [...store.slice(0, index), ...store.slice(index + 1)]
            updateStore(newStore)
            action.cb( )
            return "remove todo";
        case "edit":
            return "edit todo";
        case "add":
            return "add todo";
        default: return getStore()
    }
}

export default reducer

export const initialState = {
    todos: [{
        id: Date.now(),
        taskName: "Learn about reducers",
        completed: false
    }],
    toDoInput: ""
}


const toDoReducer = (state, action) => {
    switch(action.type) {
        case("ADD_TODO"):
            return(
                state.todos: [
                    ...state.todos,
                    {
                        id: Date.now(),
                        taskName: action.payload,
                        completed: false  
                    }
                ]
            )
        case("MARK_COMPLETE"):
            return({
                ...state,
                completed: action.payload
            })
        case("CLEAR_COMPLETED"):
            return({
                ...state
            })
        case("SET_NEW_INPUT"):
            return({
                
            })
        default:
            return(state)
    }
}

export default toDoReducer
import React from 'react'

export const ToDoList = (props) => {
    const {state} = props
    console.log("Component state", state)

    return (
        <div>
            <ul>
                {state.todos.map(item=>{
                return <li>{item.taskName}</li>
                })}
            </ul>   
        </div>
    )
}





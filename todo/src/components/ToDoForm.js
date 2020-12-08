import React from 'react'

export default function ToDoForm(props) {
    const {state} = props



    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="To Do Item"
                name="toDoItem"
                value={state.input}
                onChange={}
                />
                <div>
                    <button type="submit">Add To Do</button>
                    <button>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}

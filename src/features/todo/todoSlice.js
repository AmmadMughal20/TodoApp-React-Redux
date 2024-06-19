import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1,text: 'Hello Pakistan!'}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            const id = action.payload
            state.todos = state.todos.filter((todo) => todo.id !== id)
        },
        updateTodo: (state, action) => {
            let itemToUpdate = state.todos.find((item) => item.id === action.payload.id)
            itemToUpdate.text = action.payload.text
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer
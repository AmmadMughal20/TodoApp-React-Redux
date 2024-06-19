import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import EditTodo from './editTodo';

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const [todoToUpdate, setTodoToUpdate] = useState({ id: null, text: '' })
    const dispatch = useDispatch()

    const resetTodoToUpdate = () => {
        setTodoToUpdate({ id: null, text: '' })
    }

    return (
        <>
            <div className='todos-right'>
                <h3>Todos</h3>
                <ul>
                    {
                        todos.map((item, index) => (
                            <>
                                <li key={item.id}>
                                    {item.text}
                                    <div className='edit-remove-div'>
                                        <button onClick={() => dispatch(removeTodo(item.id))}>Remove</button>
                                        <button onClick={() => { setTodoToUpdate(item) }}>Edit</button>
                                    </div>
                                </li>
                                {
                                    todos.length > 1 && index < todos.length - 1 &&
                                    <hr style={{ margin: '0% 2%' }} />
                                }
                            </>

                        ))
                    }
                </ul>
            </div>
            {
                todoToUpdate.id &&
                <EditTodo item={todoToUpdate} resetItem={resetTodoToUpdate} />
            }
        </>
    )
}

export default Todos
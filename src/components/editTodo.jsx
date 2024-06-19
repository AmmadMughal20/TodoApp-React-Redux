import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateTodo } from '../features/todo/todoSlice';

const EditTodo = ({ item, resetItem }) => {

    const [input, setInput] = useState({ id: null, text: '' })

    const dispatch = useDispatch()

    const updateTodoHandler = (e) => {
        e.preventDefault();
        dispatch(updateTodo(input))
        setInput({ id: null, text: '' });
        resetItem()
    }

    useEffect(() => {
        if (item) {
            setInput({ id: item.id, text: item.text })
        }
    }, [item])

    return (
        <>
            <form onSubmit={updateTodoHandler} className='update-form'>
                <h3>EditTodo</h3>
                <input type='text' placeholder='Update todo...' required value={input.text} onChange={(e) => setInput(prevInput => ({ ...prevInput, text: e.target.value }))} />
                <button type='submit'>Update todo</button>
            </form>
        </>

    )
}

export default EditTodo
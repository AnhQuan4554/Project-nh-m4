import React, { useState } from 'react'
import { SAddTodo } from './style'
import Input from '../../components/inputTodo'
import Button from '../../components/buttonTodo'



const AddToDo = () => {

    const inittialState = {
        date: "",
        day: "",
        todo: "",
        location: "",
        time: ""
    }
    const [addToDo, setAddToDo] = useState(inittialState)
    const handleSubmit = (e) => {
        e.preventDefault()

        const todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []

        localStorage.setItem("todos", JSON.stringify([...todos, addToDo]))

        setAddToDo(inittialState)

    }


    return (
        <SAddTodo>
            <form onSubmit={handleSubmit}>
                <h1>New Event</h1>
                <Input value={addToDo.date} type='date' placeholder="Date" onChange={(e) => {
                    setAddToDo({ ...addToDo, date: e.target.value, day: (new Date(e.target.value)).getDay(), id: new Date(), isDone: "unfinished" });
                }} />
                <Input value={addToDo.todo} placeholder="Todo..." onChange={e => setAddToDo({ ...addToDo, todo: e.target.value })} />
                <Input value={addToDo.location} placeholder="Location" onChange={e => setAddToDo({ ...addToDo, location: e.target.value })} />
                <Input value={addToDo.time} type='time' placeholder="Time" onChange={e => setAddToDo({ ...addToDo, time: e.target.value })} />

                <Button text="ADD TO SCHEDULE" />


            </form>
        </SAddTodo>
    )
}

export default AddToDo
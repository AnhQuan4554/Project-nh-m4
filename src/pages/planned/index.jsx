import React, { useState } from 'react'
import { SPlanned } from './style'
import { AiOutlineClockCircle } from 'react-icons/ai'
import Header from '../../components/headerTodo'
import {Sbutton_addSchedule} from"./style"
const Planned = () => {
    const [todos, setTodos] = useState([])
    const [day, setDay] = useState("")
    const getToDosValue = (todoValues, date) => {
        const findDate = todoValues.filter(todo => todo.date === date)
        setTodos(findDate)
        const day = new Date(date).getDay()
        setDay(day)


    }
    const handleClick_addSchedule = ()=>{
        const schedule = document.querySelector('.wrapSchedule');
        schedule.classList.remove('show')
       const formAdd_todo =  document.querySelector('.formAdd_todo')
        formAdd_todo.classList.add('show')
    }

    return (
        <SPlanned className='wrapSchedule'>

            <div className='container '>
                <Header className="header" getToDosValue={getToDosValue} day={day} />
                <div className='content-container'>
                    {todos.length === 0 ?
                        <div className='notification'>
                            You don't have any plans for this day....
                        </div>
                        : todos.map((todo, index) => {
                            return (
                                <div key={index}>
                                    <div className='content-item'>
                                        <div className="time">
                                            <p>  <AiOutlineClockCircle /> {todo.time} </p>
                                            <button>Done</button>
                                        </div>
                                        <div className="content">
                                            {todo.todo}
                                        </div>

                                    </div>
                                    <div className='circle'></div>
                                </div>
                            )
                        })}

                </div>
                <Sbutton_addSchedule onClick={handleClick_addSchedule}>Thêm nhiệm vụ</Sbutton_addSchedule>
            </div>
        </SPlanned>
    )
}

export default Planned
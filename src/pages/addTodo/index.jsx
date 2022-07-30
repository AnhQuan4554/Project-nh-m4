import React, { useState,useEffect } from "react";
import { SAddTodo } from "./style";
import Input from "../../components/inputTodo";
import Button_todo from "../../components/buttonTodo";

const AddToDo = () => {
  const [isShow_schedule, setIsShow_schedule] = useState(false)
  const inittialState = {
    date: "",
    day: "",
    todo: "",
    location: "",
    time: "",
  };
  const [addToDo, setAddToDo] = useState(inittialState);
  const handleSubmit = (e) => {
    e.preventDefault();

    const todos = localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : [];

    localStorage.setItem("todos", JSON.stringify([...todos, addToDo]));

    setAddToDo(inittialState);
  };
  /////////
  const handleClick_show  = ()=>{
    const formAdd_todo =  document.querySelector('.formAdd_todo')
     let hasClassShow = formAdd_todo.classList.contains("show");
     hasClassShow && formAdd_todo.classList.remove('show')
     
     const schedule = document.querySelector('.wrapSchedule');
     schedule.classList.add('show')

     
 }
  return (
    <SAddTodo className=" formAdd_todo show">
      <form onSubmit={handleSubmit}>
        <h1>New Event</h1>
        <Input
          value={addToDo.date}
          type="date"
          placeholder="Date"
          onChange={(e) => {
            setAddToDo({
              ...addToDo,
              date: e.target.value,
              day: new Date(e.target.value).getDay(),
            });
          }}
        />
        <Input
          value={addToDo.todo}
          placeholder="Todo..."
          onChange={(e) => setAddToDo({ ...addToDo, todo: e.target.value })}
        />
        <Input
          value={addToDo.location}
          placeholder="Location"
          onChange={(e) => setAddToDo({ ...addToDo, location: e.target.value })}
        />
        <Input
          value={addToDo.time}
          placeholder="Time"
          onChange={(e) => setAddToDo({ ...addToDo, time: e.target.value })}
        />
        <Button_todo text="ADD TO SCHEDULE" />
        <Button_todo handleClick_show={handleClick_show}  text="SHOW SCHEDULE" />
      </form>
    </SAddTodo>
  );
};

export default AddToDo;

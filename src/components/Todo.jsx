import React,{ useEffect, useRef, useState } from "react";
import "./Todo.css";
import todo_icon from "../Assests/7692809.png";
import tick from '../Assests/correct_14441094.png';
import not_tick from '../Assests/disable_9566102.png';
import delete_icon from '../Assests/delete_12319540.png';
import Todoitems from "./Todoitems";


function Todo() {

const [todoList, setTodoList] = useState(localStorage.getItem("todos")? 
JSON.parse(localStorage.getItem("todos")): []);

const inputRef = useRef();

const add = () =>{
  const inputText = inputRef.current.value.trim();

  if (inputText ===""){
    return null;
  }

  const newTodo = {
    id: Date.now(),
    text: inputText,
    isComplete: false,
  }
  setTodoList((prev)=>[...prev, newTodo]);
  inputRef.current.value = "";
}

const deleteTodo = (id)=>{
  setTodoList((prvTodos)=>{
    return prvTodos.filter((todo)=> todo.id !==id)
  })
}

const toggle = (id)=>{
  setTodoList((prevTodos)=>{
    return prevTodos.map((todo)=>{
      if(todo.id === id){
        return {...todo, isComplete:!todo.isComplete}
      }
      return todo;
    })
  })
}
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList));
  
},[todoList])

  return (
    <div className="main">
      {/*---title---*/}
      <div className="items">
        <img className="image" src={todo_icon} />
        <div className="title">To Do List</div>
      </div>

      {/*---input box---*/}
      <div className="input">
        <input ref={inputRef}
          className="input_field"
          type="text"
          placeholder="Add your task"
        />
        <button  onClick={add} className="add_button">ADD +</button>
      </div>
      <div>
        {todoList.map((item,index)=>{
          return <Todoitems key={index} text={item.text} id={item.id} isComplete={item.isComplete}
          deleteTodo = {deleteTodo} toggle ={toggle}/>
        })}
      </div>    
    </div>
  );
}

export default Todo;

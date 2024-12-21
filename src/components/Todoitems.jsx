import React from 'react'
import "./Todoitems.css";
import tick from '../Assests/correct_14441094.png';
import not_tick from '../Assests/road-closed_2939118.png';
import delete_icon from '../Assests/delete_12319540.png';

const Todoitems = ({text,id,isComplete,deleteTodo,toggle})=> {
  return (
    <div className='main1'>
        <div onClick={()=>{toggle(id)}} className="task">
            <img className='tick' src={isComplete ? tick : not_tick} />
            <p className={`text ${isComplete ? "line-through" : ""}`}>{text}</p>

        </div>
        <img onClick={()=>{deleteTodo(id)}} className='delete_icon' src={delete_icon} alt="" />

    </div>
  )
}

export default Todoitems
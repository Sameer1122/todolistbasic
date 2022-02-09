import {FaTimes} from 'react-icons/fa'
import React from 'react'

const Task = ({task ,onDelete,onToggle}) => {
  return (
    <div className ={`task ${task.reminder ? "reminder": ""}`} onDoubleClick= {() => onToggle(task.id)}>
      <h3>{task.text} <FaTimes style = {{ color: "red", pointer:"cursor"}} onClick ={()=>onDelete(task.id)} /></h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task

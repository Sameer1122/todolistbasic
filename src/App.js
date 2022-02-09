import React, {useState} from 'react'
import './App.css';
import Header from './Header.js';
import Tasks from './Tasks.js';
import AddTask from './AddTask.js';


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{
    id:1,
    text: 'Learn React',
    day: "July 12th at 9:30pm",
    reminder: true
  },
  {
   id:2,
   text: 'Learn Django',
   day: "July 12th at 11:30pm",
   reminder: true
 },
 {
   id:3,
   text: 'Learn Machine Learning',
   day: "July 13th at 1:30pm",
   reminder: false
 }])
 // delete task
 const deleteTask = (id) =>{
   setTasks(tasks.filter((task) => task.id !== id))
 }
 //toggle task
 const toggleReminder = (id) => {
   setTasks(tasks.map((task) =>
   task.id === id ? {...task, reminder:!task.reminder} : task
   ))
 }
 //add task
 const addTask = (task) => {
   const id = Math.floor(Math.random()*10000)+ 1
   const newTask = {id, ...task}
   setTasks([...tasks, newTask])
 }

  return (
    <div className="container">
      <Header title = " Sameer TO DO LIST" onAddTask ={() => setShowAddTask(!showAddTask)} changeButton = {showAddTask} />
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length> 0 ? ( <Tasks  tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder} />): ('No Task to show')}
     
    </div>
      
  );
}

export default App;

import React, { useState } from 'react';
import './TaskList.css';
import PrivateContainer from './component/private/PrivateContainer';
function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', description: 'Description of Task 1', startdate: '2024-01-03', enddate: '2024-20-03' },
    { id: 2, title: 'Task 2', description: 'Description of Task 2', startdate: '2023-29-06', enddate: '2023-15-07' },
    { id: 3, title: 'Task 3', description: 'Description of Task 3', startdate: '2023-21-09', enddate: '2023-01-10' },
    { id: 4, title: 'Task 4', description: 'Description of Task 4', startdate: '2024-01-06', enddate: '2024-07-06' },


    
  ]);

  const [newTask, setNewTask] = useState({
    id: tasks.length + 6,
    title: tasks.length + 6,
    description: tasks.length + 6,
    startdate: Date,
    enddate: Date
  });
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addTask = () => {
    if (newTask.title.trim() !== '' && newTask.description.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { ...newTask }]);
      setNewTask({ id: newTask.id + 6, title: newTask.title + 6, description: newTask.description + 6 , startdate: newTask.startdate + 6, enddate: '' });
    }

  };


 const deleteTask = (id) => {
    if (deleteTask.title.trim() !== '' && deleteTask.description.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { ...deleteTask }]);
      // setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
      setNewTask({ id: deleteTask.id + 6, title: deleteTask.title + 6, description: deleteTask.description + 6, startdate: deleteTask.description + 6, startdate: deleteTask.startdate + 6, enddate: '' });
    }

  };


 
  return (
    // <PrivateContainer>
    <div class="ok">
      {/* <Header  class ="List of Tasks">
        <h1>Task Management</h1>
        </Header> */}

      <div>
        <input
          type="text"
          name="title"
          placeholder="Task Name"
          value={newTask.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Task Description"
          value={newTask.description}
          onChange={handleInputChange}
        />

<input
          type="date"
          name="startdate"
          placeholder="Start Date"
          value={newTask.startdate}
          onChange={handleInputChange}
        />

<input
          type="date"
          name="enddate"
          placeholder="End Date"
          value={newTask.enddate}
          onChange={handleInputChange}
        />



        <button onClick={addTask}>Add Task</button>
        <button onClick={deleteTask}>Delete Task</button>
      </div>
      <table>
        <thead class="tthead">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.startdate}</td>
              <td>{task.enddate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // </PrivateContainer>
  );
}

export default TaskList;

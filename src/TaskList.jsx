import React, { useState } from 'react';
import './TaskList.css';
import PrivateContainer from './component/private/PrivateContainer';

function TaskList() {
  const [tasks, setTasks] = useState([
    { username: 'Pinky', id: 1, title: 'Task 1', description: 'Description of Task 1', startdate: '2024-01-03', enddate: '2024-03-20', status: 'Completed' },
    { username: 'Chaithanya', id: 2, title: 'Task 2', description: 'Description of Task 2', startdate: '2023-06-29', enddate: '2023-07-15', status: 'Pending' },
    { username: 'Suchi and Kavya', id: 3, title: 'Task 3', description: 'Description of Task 3', startdate: '2023-09-21', enddate: '2023-10-01', status: 'Not Started' },
    { username: 'OyePinky', id: 4, title: 'Task 4', description: 'Description of Task 4', startdate: '2024-06-01', enddate: '2024-06-07', status: 'In Progress' },
  ]);

  const [newTask, setNewTask] = useState({
    username: '',
    title: '',
    description: '',
    startdate: '',
    enddate: '',
    status: 'Pending'
  });

  const [editTaskId, setEditTaskId] = useState(null);
  const [editTask, setEditTask] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditTask(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addTask = () => {
    if (newTask.username.trim() !== '' && newTask.title.trim() !== '' && newTask.description.trim() !== '') {
      setTasks(prevTasks => [...prevTasks, { ...newTask, id: tasks.length + 1 }]);
      setNewTask({ username: '', title: '', description: '', startdate: '', enddate: '', status: 'Pending' });
    }
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  const startEditing = (task) => {
    setEditTaskId(task.id);
    setEditTask(task);
  };

  const cancelEditing = () => {
    setEditTaskId(null);
    setEditTask({});
  };

  const saveTask = (id) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === id ? editTask : task));
    cancelEditing();
  };

  return (
    <PrivateContainer>
      <div className="ok">
        <h1>List of Tasks</h1>
        <div>
          <input 
            type="text"
            name="username"
            placeholder="Username"
            value={newTask.username}
            onChange={handleInputChange}
          />
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
          <select
            name="status"
            value={newTask.status}
            onChange={handleInputChange}
          >
            <option value="Pending">Pending</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
          </select>
          <button onClick={addTask}>Add Task</button>
          
        </div>
        <h1>List of Task Management System</h1>
        <table>
          <thead className="tthead">
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map(task => (
              <tr key={task.id}>
                {editTaskId === task.id ? (
                  <>
                    <td>{task.id}</td>
                    <td><input type="text" name="username" value={editTask.username} onChange={handleEditInputChange} /></td>
                    <td><input type="text" name="title" value={editTask.title} onChange={handleEditInputChange} /></td>
                    <td><input type="text" name="description" value={editTask.description} onChange={handleEditInputChange} /></td>
                    <td><input type="date" name="startdate" value={editTask.startdate} onChange={handleEditInputChange} /></td>
                    <td><input type="date" name="enddate" value={editTask.enddate} onChange={handleEditInputChange} /></td>
                    <td>
                      <select name="status" value={editTask.status} onChange={handleEditInputChange}>
                        <option value="Pending">Pending</option>
                        <option value="Completed">Completed</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Not Started">Not Started</option>
                      </select>
                    </td>
                    <td>
                      <button onClick={() => saveTask(task.id)}>Save</button>
                      <button onClick={cancelEditing}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{task.id}</td>
                    <td>{task.username}</td>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.startdate}</td>
                    <td>{task.enddate}</td>
                    <td>{task.status}</td>
                    <td>
                      <button onClick={() => startEditing(task)}>Edit</button>
                      <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PrivateContainer>
  );
}

export default TaskList;

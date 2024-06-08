import React, { useEffect, useState } from "react";
import PublicContainer from "./component/public/PublicContainer";
import './Home.css';


const Home = () => {
     const [tasks, setTasks] = useState([]);

     useEffect(() => {
          fetch("http://localhost:8080/user/tasks")
               .then(res => {
                    if (!res.ok) {
                         throw new Error('Network response was not ok');
                    }
                    return res.json();
               })
               .then(data => {
                    setTasks(data);
               })
               .catch(error => {
                    console.error('Error fetching data:', error);
               });
     }, []);

     return (
          <>

          <PublicContainer>
          <div className="ch">
               <h1>Welcome to the Task App</h1>
                 <div className="Home">
                             {/* <a href=" ">Get Started</a> */}

                </div>

               <div>
                    {tasks.map(task => (
                         <div key={task.id}>
                              <h1>{task.name}</h1>
                              {/* <div>
                                   <span>Update: {task.update}</span>
                                   <span>Update: {task.update}</span>
                              </div> */}
                              <p>{task.description}</p>
                         </div>
                    ))}
               </div>
               </div>
               </PublicContainer>
          </>
     );
}

export default Home;

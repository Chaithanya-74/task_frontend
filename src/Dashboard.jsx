// import React, { useState } from 'react';
// import PublicContainer from './component/public/PublicContainer';
// import './Dashboard.css';
// function Dashboard() {
  

// const Dashboard = () => {
//   const [tasks, setTasks] = useState([
//     { id: 1, title: 'Task 1', description: 'Description of Task 1', startdate: '2024-01-03', enddate: '2024-20-03' },
//     { id: 2, title: 'Task 2', description: 'Description of Task 2', startdate: '2023-29-06', enddate: '2023-15-07' },
//     { id: 3, title: 'Task 3', description: 'Description of Task 3', startdate: '2023-21-09', enddate: '2023-01-10' },
//     { id: 4, title: 'Task 4', description: 'Description of Task 4', startdate: '2024-01-06', enddate: '2024-07-06' },
    
// ]);

//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredTasks = tasks.filter(task =>
//     task.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const overview = {
//     totalTasks: tasks.length,
//     completedTasks: tasks.filter(task => task.status === 'Completed').length,
//     pendingTasks: tasks.filter(task => task.status !== 'Completed').length,
//     overdueTasks: tasks.filter(task => new Date(task.enddate) < new Date() && task.status !== 'Completed').length
//   };

//   return (
//     <div className="dashboard">
//       <div className="overview">
// s        <div>Completed Tasks: {overview.completedTasks}</div>
//         <div>Pending Tasks: {overview.pendingTasks}</div>
//         <div>Overend Tasks: {overview.overendTasks}</div>
//       </div>

//       <div className="search">
//         <input
//           type="text"
//           placeholder="Search tasks..."
//           value={searchTerm}
//           onChange={e => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="task-list">
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               {/* <th>ID</th> */}
//             <th>Title</th>
//             <th>Description</th>
//             <th>Start Date</th>
//             <th>End Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTasks.map(task => (
//               <tr key={task.id}>
//                 <td>{task.id}</td>
//                 <td>{task.title}</td>
//                 <td>{task.description}</td>
//                 <td>{task.startdate}</td>
//                 <td>{task.enddate}</td>
//                 {/* <td>{task.dueDate}</td> */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <div className="calendar">
//         <h3>Calendar View</h3>
//         <div className="calendar-grid">
//            {/* Render a basic calendar view here * */}
//         </div>
//       </div>

//       <div className="progress-charts">
//         <h3>Progress Charts</h3>
//         <div className="chart">
//           <h4>Gantt Chart</h4>
//           {/* Render a Gantt chart here */}
//         </div>
//         <div className="chart">
//           <h4>Task Status Distribution</h4>
//           {/* Render a pie chart or bar graph here */}
//         </div>
//       </div>

//       <div className="recent-activities">
//         <h3>Recent Activities</h3>
//         <ul>
//           {/* Render recent activities here */}
//         </ul>
//       </div>

//       <div className="notifications">
//         <h3>Notifications</h3>
//         <ul>
//           {/* Render notifications and reminders here */}
//         </ul>
//       </div>
//     </div>
//   );
// };
// }
// export default Dashboard;





// // import * as React from 'react';
// // import { Dropdown } from '@mui/base/Dropdown';
// // import { Menu } from '@mui/base/Menu';
// // import { MenuButton as BaseMenuButton } from '@mui/base/MenuButton';
// // import { MenuItem as BaseMenuItem, menuItemClasses } from '@mui/base/MenuItem';
// // import { styled } from '@mui/system';
// // import dashboard from './Dashboard';

// // export default function Dashboard() {
// //   const createHandleMenuClick = (menuItem: string) => {
    
      
    
// //     return () => {
// //       console.log(`Clicked on ${menuItem}`);
// //     };
// //   };

// //   return (
// //     <Dropdown>
// //       <MenuButton>My account</MenuButton>
// //       <Menu slots={{ listbox: Listbox }}>
// //         <MenuItem onClick={createHandleMenuClick('Profile')}>Profile</MenuItem>
// //         <MenuItem onClick={createHandleMenuClick('Language settings')}>
// //           Language settings
// //         </MenuItem>
// //         <MenuItem onClick={createHandleMenuClick('Log out')}>Log out</MenuItem>
// //       </Menu>
// //     </Dropdown>
// //   );
// // }

// // const blue = {
// //   50: '#F0F7FF',
// //   100: '#C2E0FF',
// //   200: '#99CCF3',
// //   300: '#66B2FF',
// //   400: '#3399FF',
// //   500: '#007FFF',
// //   600: '#0072E6',
// //   700: '#0059B3',
// //   800: '#004C99',
// //   900: '#003A75',
// // };

// // const grey = {
// //   50: '#F3F6F9',
// //   100: '#E5EAF2',
// //   200: '#DAE2ED',
// //   300: '#C7D0DD',
// //   400: '#B0B8C4',
// //   500: '#9DA8B7',
// //   600: '#6B7A90',
// //   700: '#434D5B',
// //   800: '#303740',
// //   900: '#1C2025',
// // };

// // const Listbox = styled('ul')(
// //   ({ theme }) => `
// //   font-family: 'IBM Plex Sans', sans-serif;
// //   font-size: 0.875rem;
// //   box-sizing: border-box;
// //   padding: 6px;
// //   margin: 12px 0;
// //   min-width: 200px;
// //   border-radius: 12px;
// //   overflow: auto;
// //   outline: 0px;
// //   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
// //   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
// //   color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
// //   box-shadow: 0px 4px 6px ${
// //     theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.50)' : 'rgba(0,0,0, 0.05)'
// //   };
// //   z-index: 1;
  
// // );

// // const MenuItem = styled(BaseMenuItem)(
// //   ({ theme }) => 
// //   list-style: none;
// //   padding: 8px;
// //   border-radius: 8px;
// //   cursor: default;
// //   user-select: none;

// //   &:last-of-type {
// //     border-bottom: none;
// //   }

// //   &:focus {
// //     outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
// //     background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
// //     color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
// //   }

// //   &.${menuItemClasses.disabled} {
// //     color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
// //   }
// //   `,
// // );

// // const MenuButton = styled(BaseMenuButton)(
// //   ({ theme }) => `
// //   font-family: 'IBM Plex Sans', sans-serif;
// //   font-weight: 600;
// //   font-size: 0.875rem;
// //   line-height: 1.5;
// //   padding: 8px 16px;
// //   border-radius: 8px;
// //   color: white;
// //   transition: all 150ms ease;
// //   cursor: pointer;
// //   background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
// //   border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
// //   color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
// //   box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

// //   &:hover {
// //     background: ${theme.palette.mode === 'dark' ? grey[800] : grey[50]};
// //     border-color: ${theme.palette.mode === 'dark' ? grey[600] : grey[300]};
// //   }

// //   &:active {
// //     background: ${theme.palette.mode === 'dark' ? grey[700] : grey[100]};
// //   }

// //   &:focus-visible {
// //     box-shadow: 0 0 0 4px ${theme.palette.mode === 'dark' ? blue[300] : blue[200]};
// //     outline: none;
// //   }
  
// // );
// // export default  Dashboard;
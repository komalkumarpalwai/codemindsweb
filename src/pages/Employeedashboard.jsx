import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeNavbar from '../components/Navbar'; // You'll need to create this

const EmployeeDashboard = () => {
  const [activeTab, setActiveTab] = useState('myTasks');
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', deadline: '2023-06-15', hoursWorked: 12 },
    { id: 2, name: 'Client Presentation', status: 'Pending', deadline: '2023-06-20', hoursWorked: 0 },
    { id: 3, name: 'Logo Concepts', status: 'Completed', deadline: '2023-06-05', hoursWorked: 8 }
  ]);
  const [timeEntries, setTimeEntries] = useState([
    { id: 1, date: '2023-06-01', hours: 8, task: 'Website Redesign' },
    { id: 2, date: '2023-06-02', hours: 7, task: 'Website Redesign' },
    { id: 3, date: '2023-06-05', hours: 8, task: 'Logo Concepts' }
  ]);
  const [currentTask, setCurrentTask] = useState('');
  const [hoursToday, setHoursToday] = useState(0);
  const [newTimeEntry, setNewTimeEntry] = useState({ hours: '', taskId: '' });
  const navigate = useNavigate();

  // Update task status
  const updateTaskStatus = (id, status) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  // Add time entry
  const addTimeEntry = () => {
    if (newTimeEntry.hours && newTimeEntry.taskId) {
      const task = tasks.find(t => t.id === parseInt(newTimeEntry.taskId));
      const newId = timeEntries.length > 0 ? Math.max(...timeEntries.map(t => t.id)) + 1 : 1;
      
      setTimeEntries([
        ...timeEntries,
        {
          id: newId,
          date: new Date().toISOString().split('T')[0],
          hours: parseInt(newTimeEntry.hours),
          task: task.name
        }
      ]);
      
      // Update hours worked on the task
      setTasks(tasks.map(t => 
        t.id === task.id ? { ...t, hoursWorked: t.hoursWorked + parseInt(newTimeEntry.hours) } : t
      ));
      
      setNewTimeEntry({ hours: '', taskId: '' });
      alert('Time entry added successfully!');
    }
  };

  // Calculate today's hours
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    const todayHours = timeEntries
      .filter(entry => entry.date === today)
      .reduce((sum, entry) => sum + entry.hours, 0);
    setHoursToday(todayHours);
  }, [timeEntries]);

  return (
    <div className="employee-dashboard">
      <EmployeeNavbar />
      
      <div className="employee-header">
        <h1>My Dashboard</h1>
        <div className="stats">
          <div className="stat-card">
            <span>Tasks Assigned</span>
            <strong>{tasks.length}</strong>
          </div>
          <div className="stat-card">
            <span>Hours Today</span>
            <strong>{hoursToday}</strong>
          </div>
          <div className="stat-card">
            <span>Pending Tasks</span>
            <strong>{tasks.filter(t => t.status === 'Pending').length}</strong>
          </div>
        </div>
      </div>

      <div className="employee-tabs">
        <button 
          className={activeTab === 'myTasks' ? 'active' : ''}
          onClick={() => setActiveTab('myTasks')}
        >
          My Tasks
        </button>
        <button 
          className={activeTab === 'timeTracking' ? 'active' : ''}
          onClick={() => setActiveTab('timeTracking')}
        >
          Time Tracking
        </button>
        <button 
          className={activeTab === 'designPortfolio' ? 'active' : ''}
          onClick={() => setActiveTab('designPortfolio')}
        >
          My Designs
        </button>
      </div>

      <div className="employee-content">
        {activeTab === 'myTasks' && (
          <div className="tasks-section">
            <h2>My Current Tasks</h2>
            <div className="tasks-list">
              {tasks.map(task => (
                <div key={task.id} className="task-card">
                  <div className="task-info">
                    <h3>{task.name}</h3>
                    <p>Status: <span className={`status-${task.status.toLowerCase()}`}>{task.status}</span></p>
                    <p>Deadline: {task.deadline}</p>
                    <p>Hours Worked: {task.hoursWorked}</p>
                  </div>
                  <div className="task-actions">
                    <select
                      value={task.status}
                      onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'timeTracking' && (
          <div className="time-tracking">
            <h2>Log Work Hours</h2>
            <div className="time-entry-form">
              <select
                value={newTimeEntry.taskId}
                onChange={(e) => setNewTimeEntry({...newTimeEntry, taskId: e.target.value})}
              >
                <option value="">Select Task</option>
                {tasks.map(task => (
                  <option key={task.id} value={task.id}>{task.name}</option>
                ))}
              </select>
              <input
                type="number"
                placeholder="Hours"
                value={newTimeEntry.hours}
                onChange={(e) => setNewTimeEntry({...newTimeEntry, hours: e.target.value})}
                min="1"
                max="12"
              />
              <button onClick={addTimeEntry}>Add Time Entry</button>
            </div>

            <h3>My Time Entries</h3>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Task</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                {timeEntries.map(entry => (
                  <tr key={entry.id}>
                    <td>{entry.date}</td>
                    <td>{entry.task}</td>
                    <td>{entry.hours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'designPortfolio' && (
          <div className="design-portfolio">
            <h2>My Design Portfolio</h2>
            <div className="designs-grid">
              {[1, 2, 3, 4, 5, 6].map(item => (
                <div key={item} className="design-item">
                  <div className="design-thumbnail">
                    <img src={`https://via.placeholder.com/300x200?text=Design+${item}`} alt={`Design ${item}`} />
                  </div>
                  <div className="design-meta">
                    <h3>Project {item}</h3>
                    <p>Created: 2023-06-{item < 10 ? `0${item}` : item}</p>
                    <button>View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .employee-dashboard {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .employee-header {
          margin-bottom: 30px;
        }
        .employee-header h1 {
          margin-bottom: 20px;
          color: #333;
        }
        .stats {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }
        .stat-card {
          flex: 1;
          padding: 15px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          text-align: center;
        }
        .stat-card span {
          display: block;
          color: #666;
          font-size: 14px;
        }
        .stat-card strong {
          font-size: 24px;
          color: #007bff;
        }
        .employee-tabs {
          display: flex;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }
        .employee-tabs button {
          padding: 10px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .employee-tabs button.active {
          border-bottom: 2px solid #007bff;
          color: #007bff;
        }
        .employee-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .tasks-list {
          display: grid;
          gap: 15px;
        }
        .task-card {
          display: flex;
          justify-content: space-between;
          padding: 15px;
          border: 1px solid #eee;
          border-radius: 8px;
        }
        .task-info h3 {
          margin: 0 0 10px 0;
        }
        .task-info p {
          margin: 5px 0;
          color: #666;
        }
        .status-pending {
          color: #ffc107;
        }
        .status-in-progress {
          color: #17a2b8;
        }
        .status-completed {
          color: #28a745;
        }
        .time-entry-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        .time-entry-form input,
        .time-entry-form select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .time-entry-form button {
          padding: 8px 15px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }
        th {
          background-color: #f8f9fa;
        }
        .designs-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .design-item {
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
        }
        .design-thumbnail img {
          width: 100%;
          height: auto;
          display: block;
        }
        .design-meta {
          padding: 15px;
        }
        .design-meta h3 {
          margin: 0 0 10px 0;
        }
        .design-meta p {
          margin: 5px 0;
          color: #666;
          font-size: 14px;
        }
        .design-meta button {
          margin-top: 10px;
          padding: 5px 10px;
          background: #f8f9fa;
          border: 1px solid #ddd;
          border-radius: 4px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default EmployeeDashboard;
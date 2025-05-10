import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminNavbar from '../components/Navbar'; // You'll need to create this

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('assignWork');
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', hoursWorked: 6 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', hoursWorked: 8 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', hoursWorked: 7 }
  ]);
  const [projects, setProjects] = useState([
    { id: 1, name: 'Website Redesign', status: 'In Progress', assignedTo: 1 },
    { id: 2, name: 'Logo Design', status: 'Completed', assignedTo: 2 },
    { id: 3, name: 'Social Media Campaign', status: 'Pending', assignedTo: null }
  ]);
  const [designs, setDesigns] = useState([
    { id: 1, name: 'Brand Guidelines', file: 'brand-guidelines.pdf', date: '2023-05-15' },
    { id: 2, name: 'Product Packaging', file: 'packaging-design.ai', date: '2023-05-10' }
  ]);
  const [newDesign, setNewDesign] = useState({ name: '', file: null });
  const [newProject, setNewProject] = useState({ name: '', employeeId: '' });
  const navigate = useNavigate();

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setNewDesign({ ...newDesign, file });
    }
  };

  // Add new design
  const addDesign = () => {
    if (newDesign.name && newDesign.file) {
      const newId = designs.length > 0 ? Math.max(...designs.map(d => d.id)) + 1 : 1;
      setDesigns([
        ...designs,
        {
          id: newId,
          name: newDesign.name,
          file: newDesign.file.name,
          date: new Date().toISOString().split('T')[0]
        }
      ]);
      setNewDesign({ name: '', file: null });
      alert('Design uploaded successfully!');
    }
  };

  // Delete design
  const deleteDesign = (id) => {
    setDesigns(designs.filter(design => design.id !== id));
  };

  // Assign project
  const assignProject = () => {
    if (newProject.name && newProject.employeeId) {
      const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id)) + 1 : 1;
      setProjects([
        ...projects,
        {
          id: newId,
          name: newProject.name,
          status: 'Pending',
          assignedTo: parseInt(newProject.employeeId)
        }
      ]);
      setNewProject({ name: '', employeeId: '' });
      alert('Project assigned successfully!');
    }
  };

  // Update work hours
  const updateHours = (id, hours) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, hoursWorked: hours } : emp
    ));
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      
      <div className="admin-tabs mt-14">
        <button 
          className={activeTab === 'assignWork' ? 'active' : ''}
          onClick={() => setActiveTab('assignWork')}
        >
          Assign Work
        </button>
        <button 
          className={activeTab === 'designs' ? 'active' : ''}
          onClick={() => setActiveTab('designs')}
        >
          Manage Designs
        </button>
        <button 
          className={activeTab === 'tracking' ? 'active' : ''}
          onClick={() => setActiveTab('tracking')}
        >
          Employee Tracking
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'assignWork' && (
          <div className="assign-work">
            <h2>Assign New Project</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Project Name"
                value={newProject.name}
                onChange={(e) => setNewProject({...newProject, name: e.target.value})}
              />
              <select
                value={newProject.employeeId}
                onChange={(e) => setNewProject({...newProject, employeeId: e.target.value})}
              >
                <option value="">Select Employee</option>
                {employees.map(emp => (
                  <option key={emp.id} value={emp.id}>{emp.name}</option>
                ))}
              </select>
              <button onClick={assignProject}>Assign Project</button>
            </div>

            <h3>Current Projects</h3>
            <table>
              <thead>
                <tr>
                  <th>Project</th>
                  <th>Assigned To</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {projects.map(project => (
                  <tr key={project.id}>
                    <td>{project.name}</td>
                    <td>
                      {employees.find(e => e.id === project.assignedTo)?.name || 'Unassigned'}
                    </td>
                    <td>{project.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'designs' && (
          <div className="manage-designs">
            <h2>Upload New Design</h2>
            <div className="upload-form">
              <input
                type="text"
                placeholder="Design Name"
                value={newDesign.name}
                onChange={(e) => setNewDesign({...newDesign, name: e.target.value})}
              />
              <input
                type="file"
                onChange={handleFileUpload}
              />
              <button onClick={addDesign}>Upload Design</button>
            </div>

            <h3>Design Portfolio</h3>
            <div className="designs-list">
              {designs.map(design => (
                <div key={design.id} className="design-item">
                  <div>
                    <strong>{design.name}</strong>
                    <span>{design.file}</span>
                    <small>Uploaded: {design.date}</small>
                  </div>
                  <button 
                    className="delete-btn"
                    onClick={() => deleteDesign(design.id)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'tracking' && (
          <div className="employee-tracking">
            <h2>Employee Work Hours</h2>
            <table>
              <thead>
                <tr>
                  <th>Employee</th>
                  <th>Email</th>
                  <th>Hours Worked Today</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {employees.map(employee => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>
                      <input
                        type="number"
                        value={employee.hoursWorked}
                        onChange={(e) => updateHours(employee.id, parseInt(e.target.value))}
                        min="0"
                        max="24"
                      />
                    </td>
                    <td>
                      <button>View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <style jsx>{`
        .admin-dashboard {
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .admin-tabs {
          display: flex;
          margin-bottom: 20px;
          border-bottom: 1px solid #ddd;
        }
        .admin-tabs button {
          padding: 10px 20px;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        .admin-tabs button.active {
          border-bottom: 2px solid #007bff;
          color: #007bff;
        }
        .admin-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .form-group, .upload-form {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
        }
        input, select {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        button {
          padding: 8px 15px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        button.delete-btn {
          background: #dc3545;
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
        .design-item {
          display: flex;
          justify-content: space-between;
          padding: 10px;
          border: 1px solid #eee;
          margin-bottom: 10px;
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default AdminDashboard;
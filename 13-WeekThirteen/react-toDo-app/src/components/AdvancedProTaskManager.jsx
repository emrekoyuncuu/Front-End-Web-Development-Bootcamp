import React, { useState, useEffect } from 'react';
import { Plus, Check, Trash, Edit2, X } from 'lucide-react';

const AdvancedProTaskManager = () => {
  // State variables
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('All');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');
  const [notification, setNotification] = useState({ message: '', type: '' });

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
      showNotification('Task added successfully!', 'success');
    }
  };

  // Toggle task completion status
  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
    showNotification('Task deleted successfully!', 'success');
  };

  // Clear completed tasks
  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
    showNotification('Completed tasks cleared!', 'success');
  };

  // Start editing a task
  const startEditing = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  // Save edited task
  const saveEdit = () => {
    if (editText.trim() !== '') {
      setTasks(tasks.map(task =>
        task.id === editingId ? { ...task, text: editText } : task
      ));
      setEditingId(null);
      showNotification('Task updated successfully!', 'success');
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditText('');
  };

  // Filter tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  // Show notification
  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: '', type: '' }), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Pro Task Manager</h1>
        
        {/* Task input */}
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="What needs to be done?"
            className="flex-grow px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Filter buttons */}
        <div className="flex justify-center mb-4 space-x-2">
          {['All', 'Active', 'Completed'].map(filterName => (
            <button
              key={filterName}
              onClick={() => setFilter(filterName)}
              className={`px-4 py-2 rounded-full transition duration-300 ease-in-out ${
                filter === filterName
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {filterName}
            </button>
          ))}
        </div>

        {/* Task list */}
        <ul className="space-y-2 mb-4">
          {filteredTasks.map(task => (
            <li key={task.id} className="flex items-center bg-gray-50 rounded-lg p-2 shadow-sm transition duration-300 ease-in-out hover:shadow-md">
              {editingId === task.id ? (
                <>
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-grow px-2 py-1 mr-2 text-gray-700 bg-white rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <button onClick={saveEdit} className="p-1 text-green-600 hover:text-green-800">
                    <Check size={20} />
                  </button>
                  <button onClick={cancelEdit} className="p-1 text-red-600 hover:text-red-800">
                    <X size={20} />
                  </button>
                </>
              ) : (
                <>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-400 mr-2"
                  />
                  <span className={`flex-grow ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.text}
                  </span>
                  <button onClick={() => startEditing(task.id, task.text)} className="p-1 text-blue-600 hover:text-blue-800">
                    <Edit2 size={20} />
                  </button>
                  <button onClick={() => deleteTask(task.id)} className="p-1 text-red-600 hover:text-red-800">
                    <Trash size={20} />
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>

        {/* Task count and clear completed button */}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">{tasks.filter(task => !task.completed).length} tasks remaining</span>
          <button
            onClick={clearCompleted}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            Clear Completed
          </button>
        </div>

        {/* Notification */}
        {notification.message && (
          <div className={`fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg transition duration-300 ease-in-out ${
            notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white`}>
            {notification.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedProTaskManager;
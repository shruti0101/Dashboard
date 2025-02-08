import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/global.css';
import '../styles/dummyList.css';

const DummyList = () => {
  const [data, setData] = useState([]);
  const [newUser, setNewUser] = useState('');

 
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  const handleAddUser = () => {
    if (!newUser.trim()) {
      alert('Please enter a name');
      return;
    }

    axios.post('https://jsonplaceholder.typicode.com/users', {
      name: newUser,
      email: `${newUser.replace(/\s/g, '').toLowerCase()}@example.com`
    }).then(response => {
      setData([response.data, ...data]); 
      setNewUser('');
    }).catch(error => console.error('Error adding user:', error));
  };

  return (
    <div className="container dummy-list-container">
      <h2>Dummy User List</h2>
      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={newUser} 
          onChange={(e) => setNewUser(e.target.value)}
        />
        <button onClick={handleAddUser}>Add User</button>
      </div>
      <ul className="list-container">
        {data.map(user => (
          <li key={user.id}><strong>{user.name}</strong> - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default DummyList;

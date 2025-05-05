import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './UserSettings.css';

const ViewUsers = ({ currentUser }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser || currentUser.role !== 'admin') {
      navigate('/unauthorized');
      return;
    }

    axios.get('/api/users')
      .then((res) => setUsers(res.data))
      .catch((err) => {
        setError('Failed to fetch users.');
        console.error(err);
      });
  }, [currentUser, navigate]);

  return (
    <div className="main-container">
      <div className="main-box">
        <Link to="/Home">
          <button className="home-button">Go to Home Page</button>
        </Link>
        <h1>All User Settings</h1>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        {users.map((user) => (
          <div key={user._id} className="hidden1" style={{ marginBottom: '2rem' }}>
            <h3>{user.username}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Password (hashed):</strong> {user.password}</p>
            <p><strong>Locked Sites:</strong></p>
            <ul>
              {user.lockedSites?.map((site, i) => <li key={i}>{site}</li>)}
            </ul>
            <p><strong>Unlocked Sites:</strong></p>
            <ul>
              {user.unlockedSites?.map((site, i) => <li key={i}>{site}</li>)}
            </ul>
            <p><strong>Uploaded Files:</strong></p>
            <ul>
              {user.uploadedFiles?.map((file, i) => <li key={i}>{file.name}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewUsers;

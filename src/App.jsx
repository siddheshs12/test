import React, { useState } from 'react';
import './App.css'; // Keep this so it looks nice

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in as: ${username}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      <div style={{ padding: '30px', border: '1px solid #ccc', borderRadius: '10px', width: '300px' }}>
        <h2>Hospital Login</h2>
        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '15px' }}>
            <label>Username:</label><br/>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Password:</label><br/>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '8px' }}
            />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none' }}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
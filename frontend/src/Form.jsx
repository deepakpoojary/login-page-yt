import React, { useState } from 'react';
import axios from 'axios';
const Form = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try {
      const response = await axios.post('http://localhost:3000/login', { username, password });
      console.log(response.data);
      // You can handle successful login here, e.g., redirect to another page
    } catch (error) {
      console.error('Error logging in:', error);
      // You can handle login error here, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Form;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/SliceAuth'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/global.css';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
     
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = response.data;

  
      const user = users.find((u) => u.email === email);

      if (user) {
        dispatch(loginSuccess({ email: user.email, name: user.name }));
        navigate('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Login failed! Try again.');
    }
  };

  return (
    <section className='login-section'>

    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
    </section>
  );
};

export default Login;

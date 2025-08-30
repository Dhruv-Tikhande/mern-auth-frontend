import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use your live Render URL here
      const res = await axios.post('https://my-auth-api-lgbc.onrender.com/api/auth/login', formData);
      //const res = await axios.post('http://localhost:3000/api/auth/login', formData);
      console.log('Login successful:', res.data);
      
      // Store the token in local storage
      localStorage.setItem('token', res.data.token);
      
      alert('Login successful!');
      // Redirect to a protected dashboard or home page
      // window.location.href = '/dashboard';
    } catch (err) {
      // This is the updated part
      if (err.response) {
          console.error('Login error:', err.response.data);
          alert('Error logging in: ' + err.response.data.msg);
      } else {
        console.error('An error occurred:', err.message)
        alert('An error occurred: + err.message'
        )
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          onChange={onChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          minLength="6"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

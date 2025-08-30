import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  });

  const { name, email, password, phone } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use your live Render URL here
      const res = await axios.post('https://my-auth-api-lgbc.onrender.com/api/auth/register', formData);
      //const res = await axios.post('http://localhost:3000/api/auth/register', formData);
      console.log('User registered successfully:', res.data);
      alert('Registration successful! Please login.');
      // You can also store the token and redirect
      // localStorage.setItem('token', res.data.token);
      // window.location.href = '/dashboard'; // Example redirect
    } catch (err) {
      console.error('Registration error:', err.response.data);
      alert('Error registering user: ' + err.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          required
        />
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
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={onChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
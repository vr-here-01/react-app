import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Logging in...');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Handle registration logic here
    console.log('Registering user...');
  };

  return (
    <div className="login-register-container">
      <div className="tab-header">
        <div 
          className={`tab ${activeTab === 'login' ? 'active' : ''}`} 
          onClick={() => handleTabClick('login')}
        >
          Login
        </div>
        <div 
          className={`tab ${activeTab === 'register' ? 'active' : ''}`} 
          onClick={() => handleTabClick('register')}
        >
          Register
        </div>
      </div>

      {activeTab === 'login' && (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" required />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
          <div className="links">
            <a href="/forgot" className="forgot-link">Forgot Username or Password?</a>
          </div>
        </div>
      )}

      {activeTab === 'register' && (
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="input-group">
              <label htmlFor="new-username">Username</label>
              <input type="text" id="new-username" required />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="new-password">Password</label>
              <input type="password" id="new-password" required />
            </div>
            <button type="submit" className="register-btn">Register</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;

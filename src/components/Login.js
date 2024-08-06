
import React from 'react';
import './Login.css';

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="login-popup-overlay">
      <div className="login-popup">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-actions">
            <button type="button">Sign In</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

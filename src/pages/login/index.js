import React ,{ useState } from 'react';
import './login.css'; 
import Button from '../../components/Button';
import Input from '../../components/Input';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = 'Username is required';
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (username === 'admin' && password === 'password123') {
        setMessage('✅ Login successful!');
        onLogin ();
      } else {
        setMessage('❌ Invalid username or password');
      }
    } else {
      setMessage('');
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h2 className="login-title">Welcome</h2>
        
        <div className="form-group">
          <label>Username</label>
          <Input
            type="text"
            value={username}
            placeholder={"Enter your Username"}
            onChange={(e) => setUsername(e.target.value)}
            className={`input-field ${errors.username ? 'input-error' : ''}`}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
        </div>
        <div className="form-group">
          <label>Password</label>
          <Input
            type="password"
            value={password}
            placeholder={"Enter the password"}
            onChange={(e) => setPassword(e.target.value)}
            className={`input-field ${errors.password ? 'input-error' : ''}`}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <Button title={"Login"} onClick={handleSubmit} className="login-button"/>

        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
};

export default Login;


/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import './index.css';

interface Props {
  history: {
    push(url: string): void;
  }
};

const LoginPage: React.FC<Props> = (props) => {
  const { history } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === 'foo' && password === 'bar') {
      localStorage.setItem('isAuthenticated', 'true');
      history.push('/');
    } else {
      alert('Invalid username or password!');
    }
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form id="login-form" onSubmit={onSubmitForm}>
        <p>
          <input type="text" id="username" name="username" value={username} placeholder="Username" onChange={handleNameChange} required />
        </p>
        <p>
          <input type="password" id="email" name="email" value={password} placeholder="Password" onChange={handlePasswordChange} required />
        </p>
        <p>
          <input type="submit" id="login" value="Login" />
        </p>
      </form>

      <span className="note">Note:- login using username: 'foo', password: 'bar'.</span>
    </div>
  );
};

export default LoginPage;

import React, { useState } from 'react';
import './auth.css'
const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and password reset logic here
  };

  return (
    <div style={{
      "height": "100vh", "display": "grid", "grid-template-rows": "1fr",
      "grid-template-columns": "1fr", "place-items": "center"
    }}>
      <div className=''style={{"text-align":"center"}}>
        <h1 className='h1-form'>Forgot Password</h1>
        <form onSubmit={handleSubmit} className='authForm'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button type="submit">Reset Password</button>
        </form>
      </div ></div>
  );
};

export default ForgotPassword;

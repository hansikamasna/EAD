import React, { useState } from 'react';

function PasswordChecker() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = (pass) => {
    let score = 0;

    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[a-z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[!@#$%^&*]/.test(pass)) score++;

    if (score <= 2) {
      setStrength('Weak Password');
    } else if (score <= 4) {
      setStrength('Medium Password');
    } else {
      setStrength('Strong Password');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkStrength(value);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Password Checker</h2>

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handleChange}
        style={{
          padding: '10px',
          width: '300px'
        }}
      />

      <h3>{strength}</h3>
    </div>
  );
}

export default PasswordChecker;
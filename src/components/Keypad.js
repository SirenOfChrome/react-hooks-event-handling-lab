import React, { useState } from 'react';

function Keypad () {
  const [password, setPassword] = useState('');

  const handleChange = event => {
    setPassword(event.target.value);
    console.log('Entering password...');
  }

  return (
    <div>
      <input type="password" onChange={handleChange} value={password} />
    </div>
  )
}

export default Keypad;

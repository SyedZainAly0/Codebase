import React, { useState } from 'react';

function MyButton({ onAction, buttonColor }) {
  return (
    <button 
      onClick={onAction} 
      style={{ backgroundColor: buttonColor, color: 'white', padding: '10px' }}
    >
      Click Me to Alert the Parent!
    </button>
  );
}


function App1() {
  const [message, setMessage] = useState("Waiting for action...");

  const handleAlert = () => {
    setMessage("The Child clicked the button! Logic executed in Parent.");
    alert("Function triggered from the Child!");
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Status: {message}</h1>

      <MyButton onAction={handleAlert} buttonColor="blue" />
    </div>
  );
}

export default App1;
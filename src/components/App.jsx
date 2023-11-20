import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(now);

  function called() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(called, 1000);

  return (
    <div className="container">
      <h1>{Time}</h1>
      <button onClick={called}>Get Time</button>
    </div>
  );
}

export default App;

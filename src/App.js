import React, { useState } from 'react';
import './App.css'; // optional CSS

// Function Component using Props & State
function Welcome(props) {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2 style={{ color: "purple" }}>Hello, {props.name}! 👋</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

// Class Component Example
class Message extends React.Component {
  render() {
    return <h3 style={{ color: "green" }}>Welcome to React Components!</h3>;
  }
}

// Main App
function App() {
  return (
    <div>
      <Message />
      <Welcome name="Lumi" />
    </div>
  );
}

export default App;

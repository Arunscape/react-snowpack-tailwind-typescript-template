import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

interface AppProps {}

const App = ({}: AppProps)  => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="text-center">
      <header className="bg-gray-800 flex flex-col items-center justify-center text-white text-3xl min-h-screen">
        <img src={logo} className="animate-spin-slow" alt="logo" style={{height: '40vmin', pointerEvents: 'none'}}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-400"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

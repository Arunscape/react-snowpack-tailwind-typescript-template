import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

interface AppProps {}

const DefaultPage = () => {
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
        <img
          src={logo}
          className="animate-spin-slow"
          alt="logo"
          style={{ height: '40vmin', pointerEvents: 'none' }}
        />
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
        <Link to="/otherpage">
          <button className="text-xs">
            React Router is included in this template
          </button>
        </Link>
      </header>
    </div>
  );
};

const App = ({}: AppProps) => {
  return (
    <Router>
      <Switch>
        <Route path="/otherpage">
          <p>This is another route</p>
          <Link to="/">Go back</Link>
        </Route>
        <DefaultPage />
      </Switch>
    </Router>
  );
};

export default App;

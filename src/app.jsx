import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../src/app.css';
import { useState } from 'react';

export default function App() {
  const [testValue, setTestValue] = useState('hi');

  function noun() {
    setTestValue('apple');
  }

  return(
    <Router>
      <h1>Mad Lib App</h1>
      <div>This is a trial sentence. Values go here: {testValue}</div>
      <button onClick={noun}>Click me for a noun!</button>
    </Router>
  );
}

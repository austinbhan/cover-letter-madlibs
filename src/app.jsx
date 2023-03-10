import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../src/app.css';
import { useState } from 'react';


export default function App() {
  const [userTextOne, setUserTextOne] = useState('');
  const [userTextTwo, setUserTextTwo] = useState('');
  const [nounOne, setNounOne] = useState('');
  const [nounTwo, setNounTwo] = useState('');

  function handleSubmitOne(e) {
    e.preventDefault();
    setNounOne(`${userTextOne}`);
    setUserTextOne('');
  }

  function handleSubmitTwo(e) {
    e.preventDefault();
    setNounTwo(`${userTextTwo}`);
    setUserTextTwo('');
  }

  return(
    <Router>
      <h1>Mad Lib App</h1>
      <div className="cover-letter">
        <div>I am applying for the position of {nounOne} at {nounTwo}</div>
      </div>

      <form className="textForm"
        onSubmit={handleSubmitOne}>
        <input 
          name="userText"
          value={userTextOne} 
          placeholder="Noun 1"
          onChange={e => setUserTextOne(e.target.value)} />
        <button type="submit">Submit Noun</button>
      </form>


      <form className="textForm"
        onSubmit={handleSubmitTwo}>
        <input 
          name="userText"
          value={userTextTwo} 
          placeholder="Noun 1"
          onChange={e => setUserTextTwo(e.target.value)} />
        <button type="submit">Submit Noun</button>
      </form>
    </Router>
  );
}

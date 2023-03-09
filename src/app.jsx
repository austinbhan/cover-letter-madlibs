import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../src/app.css';
import { useState } from 'react';


export default function App() {
  const [testValue, setTestValue] = useState('');
  const [userText, setUserText] = useState('');
  const [nounOne, setNounOne] = useState('');

  function noun() {
    setTestValue('boob');
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNounOne(`${userText}`);
    setUserText('');
  }

  return(
    <Router>
      <h1>Mad Lib App</h1>
      <div className="textForms">
        <div>Noun is added here: {testValue}</div>
        <div>{nounOne}</div>
      </div>
      <div className="nounButton">
        <button onClick={noun}>Click me for a noun!</button>
      </div>

      <form className="textForm"
        onSubmit={handleSubmit}>
        <input 
          name="userText"
          value={userText} 
          placeholder="User text"
          onChange={e => setUserText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

    </Router>
  );
}

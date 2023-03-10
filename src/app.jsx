import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../src/app.css';
import { useState } from 'react';


export default function App() {
  const [userText, setUserText] = useState('');
  const [nounOne, setNounOne] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setNounOne(`${userText}`);
    setUserText('');
  }

  return(
    <Router>
      <h1>Mad Lib App</h1>
      <div className="textForms">
        <div>{nounOne}</div>
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

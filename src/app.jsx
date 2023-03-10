import {
  BrowserRouter as Router,
} from 'react-router-dom';
import '../src/app.css';
import { useState } from 'react';
import TextForm from './TextForm';
import CoverLetterOne from './CoverLetterOne';


export default function App() {
  const [userTextOne, setUserTextOne] = useState('');
  const [userTextTwo, setUserTextTwo] = useState('');
  const [userTextThree, setUserTextThree] = useState('');
  const [nounOne, setNounOne] = useState('');
  const [nounTwo, setNounTwo] = useState('');
  const [nounThree, setNounThree] = useState('');

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

  function handleSubmitThree(e) {
    e.preventDefault();
    setNounThree(`${userTextThree}`);
    setUserTextThree('');
  }

  return(
    <Router>
      <h1>Mad Lib App</h1>
      <div className="cover-letter">
        <CoverLetterOne
          nounOne={nounOne}
          nounTwo={nounTwo}
          nounThree={nounThree} />
      </div>

      <TextForm 
        handleSubmit={handleSubmitOne}
        userText={userTextOne}
        setUserText={setUserTextOne}
        term={'Noun 1'}/>

      <TextForm 
        handleSubmit={handleSubmitTwo}
        userText={userTextTwo}
        setUserText={setUserTextTwo}
        term={'Noun 2'}/>

      <TextForm 
        handleSubmit={handleSubmitThree}
        userText={userTextThree}
        setUserText={setUserTextThree}
        term={'Noun 3'}/>

    </Router>
  );
}

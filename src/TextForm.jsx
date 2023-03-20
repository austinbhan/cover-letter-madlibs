import '../src/app.css';

export default function TextForm({ 
  handleSubmit, 
  userText, 
  setUserText, 
  term }) {

  return (
    <form className="textForm"
      onSubmit={handleSubmit}>
      <input
        name="userText"
        value={userText}
        placeholder={`${term}`}
        onChange={e => setUserText(e.target.value)} />
      <button type="submit">Submit {term}</button>
    </form>
  ); 
}

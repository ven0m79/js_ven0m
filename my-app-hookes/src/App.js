//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  }
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  }
  
  const submit = () => {
    console.log({firstName, lastName})
  }
  return (
    <div className="App">
      <header className="App-header">
        <input placeholder='First name' onChange={firstNameChange} />
        <input placeholder='Last name' onChange={lastNameChange} />
        <button onClick={submit}>Click ME!</button>
      </header>
      
    </div>
  );
}

export default App;

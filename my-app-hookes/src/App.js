//import logo from './logo.svg';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

function App() { //stateless. In class - statefull. 
  const [users, setUsers] = useState(null);
  const [value, setValue] = useState("");

  const needUpdate = value === "aaa";
  const calculate = useMemo(() => {
    if (needUpdate) {let value = 0;
      for (let i = 0; i <= 100000; i++) {
        value += i;
        
      }
      console.log({value});
      return value
      
    }
    
  },[needUpdate])
  
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then((res) => res.json())
  .then(setUsers);
}, [])

  return (
    <div className="App">
      <header className="App-header">
        {/*<button onClick={handleUp}>Up!</button>
        <button onClick={handleDown}>Down!</button>
        <h2>Counter: {counter}</h2>*/}

      <input value={value} onChange={(e) => setValue(e.target.value)}/>
        <h2>{calculate}</h2>

        {users ? users.map((el) => {
          return <div key={el.id}>{el.name}</div>
        })
        : null}
      </header>
      
    </div>
  );
}

export default App;

//import logo from './logo.svg';
import { createContext, useEffect, useRef, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Section from './components/Section';

export const OurContext = createContext();

function App() { //stateless. In class - statefull. 
const [counter , setCounter] = useState(0);
const myInputRef = useRef(null);

useEffect(() => {
  myInputRef.current?.focus();
})

return (
  <div className="App">
    <header className="App-header">
        <OurContext.Provider 
          value={{
          counter,
          setCounter,
}}
>
          <Card /> 
          <Section />
        </OurContext.Provider>
      
      <button onClick={() => setCounter(counter +1)}>Click!</button>
      <input ref={myInputRef} />
    </header>

  </div>
);
}

export default App;

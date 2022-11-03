//import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Section from './components/Section';

export const OurContext = createContext();

function App() { //stateless. In class - statefull. 
const [counter , setCounter] = useState(0);


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
    </header>

  </div>
);
}

export default App;

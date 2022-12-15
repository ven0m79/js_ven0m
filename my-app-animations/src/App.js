import {globalStyles} from "./theme";
import Accordion from "./components/accordion";

function App() {
  return (
    <div className="App">
      {globalStyles()}
      <header className="App-header">
        <Accordion header="Open me!">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium consequuntur distinctio dolor inventore iste non odit perferendis provident quam sequi.
        </Accordion>
      </header>
    </div>
  );
}

export default App;

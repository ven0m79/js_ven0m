import './App.css';
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme"

const H1 = styled.h1`
color: ${({ theme }) => theme.colors.main};
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <H1>This is H1 styled</H1>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from './components/AboutPage';
import UsersPage from './components/UsersPage';
import UserPage from './components/UserPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>     
        <Header/> 
        <Route path='/' exact component={HomePage}/>
        <Route path='/about' component={AboutPage}/>
        <Route path='/users' component={UsersPage}/>
        <Route path='/users/:id' component={UserPage}/>
      </Router>
    </div>
  );
}

export default App;

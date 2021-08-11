import './App.css';
import Header from './shared/Header';
import Home from './components/Home';
import Components from './components/Components';
import GetStarted from './components/GetStarted';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
      <Router>
        <Header />
        <div className="container">
          <Route exact path="/" component= {Home}/>
          <Route path="/components" component= {Components}/>
          <Route path="/introduction" component= {GetStarted}/>
        </div>
      </Router>
  );
}

export default App;

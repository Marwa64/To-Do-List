import Header from './components/Header';
import Home from './components/Home';
import AddTask from './components/AddTask';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path='/AddTask'>
            <AddTask />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

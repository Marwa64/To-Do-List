import Header from './components/layout/Header';
import Home from './components/pages/Home';
import AddTask from './components/pages/AddTask';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const darkMode = useSelector(state => state.darkMode);

  const changeColor = () => {
    if (darkMode){
      return 'white';
    }
    return 'black';
  }

  return (
    <div>
      <Header color={changeColor()}/>
      <Router>
        <Switch>
          <Route path='/AddTask'>
            <AddTask color={changeColor()}/>
          </Route>
          <Route path='/'>
            <Home color={changeColor()}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

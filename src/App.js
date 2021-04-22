import Header from './components/Header';
import Home from './components/Home';
import AddTask from './components/AddTask';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  let bgColor, font;
  const changeMode = () => {
    let background = document.querySelector("html");
    let title = document.querySelector("h1");

    if (mode === 'dark') {
      bgColor = '#F3F3F3';
      font = 'black';
      setMode('light');
    } else {
      bgColor = '#1f1f1f';
      font = 'white';
      setMode('dark');
    }

    background.style.backgroundColor = bgColor;
    title.style.color = font;
  }
  const changeColor = () => {
    if (mode === 'dark'){
      return 'white';
    }
    return 'black';
  }

  return (
    <div>
      <Header changeMode={changeMode} color={changeColor()}/>
      <Router>
        <Switch>
          <Route path='/AddTask'>
            <AddTask color={changeColor()}/>
          </Route>
          <Route path='/'>
            <Home color={changeColor()} mode={mode}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

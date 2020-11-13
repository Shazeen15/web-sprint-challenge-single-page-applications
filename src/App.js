import React from "react";
import {Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Pizza from './components/Pizza';
import './App.css';

const App = () => {
  return (
    <div>
      <nav className='nav'>
        <Link to='/'>Home</Link>
        <Link to='/pizza'>Pizza</Link>
      </nav>
      <Switch>
        <Route path='/pizza'>
          <Pizza/>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
  );
};
export default App;

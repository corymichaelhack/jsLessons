import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Pies from './Pies';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ Home }/>
      <Route path='/pies' component={ Pies }/>
    </Switch>
  </main>
)

export default Main;
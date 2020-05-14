import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';
import Header from '../components/Header';

import Home from '../pages/Home';
import Main from '../pages/Main';

export default function Routes({ changeTheme }) {
  return (
    <>
      <Header changeTheme={changeTheme} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" component={Home} isPrivate />
      </Switch>
    </>
  );
}

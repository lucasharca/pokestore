import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { typeNumber } = useContext(ThemeContext);
  const validNumber = typeNumber === '10' || typeNumber === '11';
  console.log(validNumber);

  if (!validNumber && isPrivate) {
    return <Redirect to="/" />;
  }

  return <Route {...rest} render={props => <Component {...props} />} />;
}

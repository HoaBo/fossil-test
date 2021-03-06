import React from 'react';
import injectSheet from 'react-jss';
import {
  Switch,
  Route,
} from "react-router-dom";

import {flexCenter} from 'styles/layout';
import OrderTitle from 'pages/Order/Title';

const stylesheet = {
  Title: {
    ...flexCenter('column'),
    padding: '1rem',
    '&>div:first-child': {
      padding: '0 0 0.5rem 0',
      fontWeight: 'bold',
      fontSize: '2.25rem',
    }
  }
}

const Title = ({classes}) => 
  <Switch>
    <Route path="/order">
      <OrderTitle />
    </Route>
  </Switch>

export default injectSheet(stylesheet)(Title);
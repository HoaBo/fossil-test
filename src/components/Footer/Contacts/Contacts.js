import React from 'react';
import injectSheet from 'react-jss';

import Address from './Address';
import Phone from './Phone';
import Email from './Email';
import VerticalLine from './VerticalLine';

const stylesheet = {
  Contacts: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem 0 0.5rem 0',
  }
}

const Contacts = ({classes}) => 
  <div className={classes.Contacts}>
    <Address />
    <VerticalLine />
    <Phone />
    <VerticalLine />
    <Email />
  </div>;

export default injectSheet(stylesheet)(Contacts);
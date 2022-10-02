import React from 'react';
import { Navbar } from 'react-bootstrap';

import tikkitLogo from '../../assets/img/tikkitLogo.png';

export const HeaderEntry = () => {
  return (
    <Navbar variant="dark" expand="md" className='freedom-grad'>
        <Navbar.Brand className="">
          <img src={tikkitLogo} className="margin-t-entry" alt="logo" width="140px" />
        </Navbar.Brand>

    </Navbar>
  );
};

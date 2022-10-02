import React, { useState } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { LoginForm } from '../../components/login/Login.comp';
import { ResetPassword } from '../../components/password-reset/PasswordReset.comp';
import "./entry.style.css";

import { HeaderEntry } from '../../layout/partials/HeaderEntry.comp';


export const Entry = () => {
  const [frmLoad, setFrmLoad] = useState('login');

  const handleOnResetSubmit = e => {
    e.preventDefault();
  };

  const formSwitcher = frmType => {
    setFrmLoad(frmType);
  };

  return (
  <>
    <HeaderEntry />

    <div className="entry-page freedom-grad">

      <Jumbotron className="bg-light jumbotron" >
      {frmLoad === 'login' &&
        <LoginForm
          formSwitcher={formSwitcher}
        />
      }

      {frmLoad === 'reset' &&
        <ResetPassword
          // handleOnChange={handleOnChange}
          handleOnResetSubmit={handleOnResetSubmit}
          formSwitcher={formSwitcher}
          // email={email}
        />
      }
      </Jumbotron>
    </div>
  </>
  );
};

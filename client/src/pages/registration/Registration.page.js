import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import RegistrationForm from '../../components/registration-form/RegistrationForm.comp';
import { HeaderEntry } from '../../layout/partials/HeaderEntry.comp';
import './registration.style.css';


export const Registration = () => {
  return (
    <>
    <HeaderEntry />
    <div className="registration-page freedom-grad">
      <div className="mt-5">
      <Jumbotron className="bg-light jumbotron-1">
        <RegistrationForm />
      </Jumbotron>
      </div>
    </div>
    </>
  );
};



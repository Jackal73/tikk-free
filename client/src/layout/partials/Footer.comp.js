import React from 'react';
import tikkitLogo from '../../assets/img/tikkitLogo.png';
import freedomLogo from '../../assets/img/freedom-title-logo.png';

export const Footer = () => {
  return <div className="text-center copyright">

    <img
      src={tikkitLogo}
      className="mb-1 ml-1 mr-1" alt="logo"
      height="26px"
    />
    <img
      src={freedomLogo}
      className="mb-1 mr-2" alt="logo"
      height="26px"
    />
      &copy;2022. All Rights Reserved.<br /><a href="https://shawnKebel-portfolio.netlify.app" alt="link">kblDesigners&nbsp;</a>
  </div>
}

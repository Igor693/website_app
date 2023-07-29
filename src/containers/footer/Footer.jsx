import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to take a pick into the future now?</h1>
      </div>
      <div className="gpt3__footer-button">
        <p>Request Early Access</p>
      </div>
      
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo"/>
          <p>Igor Efremov. All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Something</p>
          <p>Social Media</p>
          <p>Something else</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Something else</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Stay in touch</h4>
          <p>Igor Efremov</p>
          <p>Phone/Fax</p>
          <p>Email</p>
        </div>
      </div>
      <div className="gp3__footer-copyright">
        <p>© Igor Efremov. 2023 Gpt-3. All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
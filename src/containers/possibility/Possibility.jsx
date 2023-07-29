import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started today!</h4>
        <h1 className="gradient__text">The possibilities are beyond your imagination!</h1>
        <p>Is he staying arrival address earnest. To preference considered it themselves inquietude collecting estimating. View park for why gay knew face. Next than near to four so hand. Times so do he downs me would. Witty abode party her found quiet law</p>
        <h4>Subscribe to our service to learn more about promos and benefits!</h4>
      </div>
    </div>
  )
}

export default Possibility
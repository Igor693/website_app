import React from 'react';
import { Feature } from '../../components';
import './featuress.css';

const featuressData = [
  {
    title: 'Some random and instantly texty',
    text: 'From me to you some randomly randomized texty shmexy. Some random and instantly texty'
  }, 
  {
    title: 'Some random and instantly texty',
    text: 'From me to you some randomly randomized texty shmexy. Some random and instantly texty'
  }, 
  {
    title: 'Some random and instantly texty',
    text: 'From me to you some randomly randomized texty shmexy. Some random and instantly texty'
  }, 
  {
    title: 'Some random and instantly texty',
    text: 'From me to you some randomly randomized texty shmexy. Some random and instantly texty'
  }, 
]

const Featuress = () => {
  return (
    <div className="gpt3__featuress section__padding" id="featuress">
      <div className="gpt3__featuress-heading">
        <h1 className="gradient__text">The future is here! Step into something new today and make it happen</h1>
        <p>Request early access to get started today!</p>
      </div>
      <div className="gpt3__featuress-container">
        {featuressData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
          ))}
      </div>
    </div>
  )
}

export default Featuress
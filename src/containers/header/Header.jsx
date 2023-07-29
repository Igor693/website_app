import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Let's Build Something AMAZING with GPT-3 OpenAI</h1>
        <p>Три года назад я переехал в Москву по работе. Я родился в маленьком городе на севере России, где все друг друга знают, поэтому сначала никак не мог привыкнуть к большому количеству людей и машин. Все торопятся, бегут, суетятся. Однако вскоре я полюбил столичную жизнь.</p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address"/>
          <button type="button">Get Started Now!</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people"/>
          <p>1600+ people requested access for the past 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
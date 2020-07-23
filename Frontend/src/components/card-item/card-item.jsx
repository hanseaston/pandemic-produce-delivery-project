import React from "react";
import "./card-item.scss";

const CardItem = () => {
  return (
    <div className='card-overall'>
      <div className='container'>
        <div className='wrapper'>
          <a href='#'>
            <img src='profile.jpeg' alt='' />
          </a>
          <div className='title'>Hans</div>
          <div className='place'>Seattle, USA</div>
        </div>
        <div className='content'>
          <p>
            User Interface Designer and <br />
            front-end developer
          </p>
          <div className='buttons'>
            <div className='btn'>
              <button>Message</button>
            </div>
            <div className='btn'>
              <button>Following</button>
            </div>
          </div>
        </div>
        <div className='icons'>
          <li>
            <a href='#'>
              <span className='fab fa-facebook-f'></span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='fab fa-twitter'></span>
            </a>
          </li>
          <li>
            <a href='#'>
              <span className='fab fa-instagram'></span>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

import React from "react";
import "./card-item.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const envelope = <FontAwesomeIcon icon={faEnvelope} size='2x' color='white' />;

const CardItem = () => {
  return (
    <div className='card-overall'>
      <div className='container'>
        <div className='wrapper'>
          <img src='profile.jpeg' alt='' />
          <div className='title'>Username</div>
          <div className='place'>Date of Order</div>
        </div>
        <div className='content'>
          <p>Address</p>
          <p>Items ordered</p>
          <div className='buttons'>
            <div className='btn'>
              <button>Edit</button>
            </div>
            <div className='btn'>
              <button>Done</button>
            </div>
          </div>
        </div>
        <div className='icons'>
          <a href='#'>
            <li>{envelope}</li>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardItem;

import React from 'react';
import './Card.css';

const Card = ({name, type, manaCost, text, flavor, imageUrl}) => {
    return (
        <div className="Card">
            <div className="info">
        <p className="header">
          { name } - { manaCost }
        </p>
        <p className="type">
          { type }
        </p>
        <p className="text">
          { text }
        </p>
        <p className="flavor">
          { flavor }
        </p>
      </div>
      <img className="preview" src={ imageUrl } />
      <div className="actions">
        <button>(+) Add to Deck</button>
        <button>(-) Remove from Deck</button>
      </div>
        </div>
    )
}


export default Card;
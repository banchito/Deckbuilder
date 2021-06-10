import React from 'react';

const DeckList = (props) => {
    const {deck} = props
  return (
    <div>
        <h3>{deck}</h3>
    </div>
  );
}

export default DeckList;
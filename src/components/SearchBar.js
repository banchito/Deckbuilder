import React, {useState} from "react";
import {fetchCards} from '../api';



const SearchBar = (props) => {
   const {title, setResults} = props;

   const [name, setName] = useState('');
   const [text, setText] = useState('');
   
   const handleNameChange = (event) => {
    setName( event.target.value );
  }

  const handleTextChange = (event) => {
    setText( event.target.value );
  }

  const handleSubmit = async(event) =>{

    event.preventDefault()
    const cards = await fetchCards({
      name, 
      text,
    });

    setResults(cards)
}



  return (
    <div id="search">
      <h3>{title}</h3>
      <form onSubmit={ handleSubmit }>

        <input type="text"
         placeholder="card search" 
         value={ name }
         onChange={ handleNameChange }/>
        
        <input
          type="text"
          placeholder="card text"
          value={ text }
          onChange={ handleTextChange } />

        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;

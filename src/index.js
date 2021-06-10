import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { fetchCards, } from './api';
import { DeckList, SearchBar, SearchResults } from './components';
import "./index.css"


  const App = () => {
    //fetchCards().then(console.log);

    const [results, setResults] = useState([]);
    const [deck, setDeck] = useState([]);

    const addCardToDeck = ({id, name}) => {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);
       
        (index > -1) 
        ? nextDeck[index].count += 1
        : nextDeck.push({
              id,
              name,
              count: 1});
        setDeck(nextDeck);  
    }

    const removeCardFromDeck = ({id})=> {
        const nextDeck = [...deck];
        const index = nextDeck.findIndex(card => card.id === id);

        if (index === -1) return 

        (nextDeck[index].count === 1) ? nextDeck.splice(index,1) : nextDeck[index].count -= 1;

        setDeck(nextDeck)
    }


    return (
      <div id="app">
        <SearchBar title={"Look up cards here..."} setResults={setResults}/>
        <SearchResults results={results} addCardToDeck={addCardToDeck} removeCardFromDeck={removeCardFromDeck}/>
        {/* {console.log("results are:", results)} */}
        <DeckList addCardToDeck={addCardToDeck} removeCardFromDeck={removeCardFromDeck} deck={deck}/>
      </div>
    );
  }
  
ReactDOM.render(
  <App />,
  document.getElementById('root')
);


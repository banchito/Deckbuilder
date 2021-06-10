import React from "react";
import Card from "./Card";
import "./SearchResults.css";

const SearchResults = (props) => {
  const { results, addCardToDeck, removeCardFromDeck } = props;
  return (
    <div id="results">
      <h3>Here's what we found ({results.length} results):</h3>

      <div className="CardList">
        {
          results.map((result) => (
          <Card 
          key={result.id} 
          addCardToDeck={addCardToDeck}
          removeCardFromDeck={removeCardFromDeck}
          {...result} />
        ))
        }
      </div>

    </div>
  );
};

export default SearchResults;

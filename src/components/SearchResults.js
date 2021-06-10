import React from 'react';
import Card from './Card';
import './SearchResults.css';


const SearchResults = (props) => {
    const {h3, results} = props
  return (
    <div id="results">
        <h3>Here's what we found ({ results.length } results):</h3>
        {
          results.map(result => (
            
            <Card key={result.id} {...result} />
            
          ))
        }
    </div>
  );
}

export default SearchResults;
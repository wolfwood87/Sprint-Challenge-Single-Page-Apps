import React, { useState } from "react";
import CharacterCard from './CharacterCard.js';

export default function SearchForm() {
  const [char, setChar] = useState({name: ''});

  const changeChar = e => {
    setChar({ ...char, [e.target.name]:e.target.value});
  };

  const charSubmit = e => {
    e.preventDefault();
    return (<CharacterCard name={char} />)
  }
  return (
    <form onSubmit={charSubmit} className="search-form">
      <div>
        <label htmlFor='name' placeholder="name"></label>
        <input
          id="name"
          name="name"
          value={char.name}
          type="text"
          onChange={changeChar}
          />
          <button type="submit">Search</button>
      </div>
    </form>
  );
}

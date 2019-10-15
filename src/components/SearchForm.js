import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard.js';
import { Route, Redirect } from 'react-router-dom';
import Character from './Character.js';

export default function SearchForm(props) {
  const [char, setChar] = useState(props.char);
  const [sub, setSub] = useState(props.sub);

  const changeChar = e => {
    setSub([ ...props.char, e.target.value]);
    setChar('');
    console.log(props.char);
  };

 

  useEffect(() => {}, [char, sub])

  props.callBack(char, sub);
  return (
    <form  className="search-form">
      <div>
        <label htmlFor='name' ></label>
        <input
          id="name"
          name="name"
          value={char.name}
          type="text"
          placeholder="Name"
          onChange={changeChar}
          
          />
      </div>
      <div>
    </div>
    </form>

    
  );
}

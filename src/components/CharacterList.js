import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  useEffect(() => {
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res);
          setChars(res.data.results);
        })

    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
      {chars.map((name, index) => (
        <CharDetails key={index} char={name} />
      ))}
    </section>
  );
}

function CharDetails({ char }) {
  const { name, species, image, status, index } = char;
  return (
    <CharacterCard image={image} name={name} species={species} stat={status} key={index} />
  );
}


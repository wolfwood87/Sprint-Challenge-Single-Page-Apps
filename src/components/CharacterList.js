import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard.js';
import { Link } from 'react-router-dom';
import SearchForm from './SearchForm.js';

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [chars, setChars] = useState([]);
  
  console.log(props.char);
  console.log(props.sub);
  
  useEffect(() => {
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res);
          setChars(res.data.results);
          
        })
        .catch(err => {
          console.log(err);
        })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  console.log(chars);
  useEffect(() => {
    
    const newChar = chars.filter((item) => {
      return (item.name.toLowerCase().includes(props.sub))
    })
    setChars(newChar);
    console.log(newChar);
    }, [props.sub]);
  console.log(chars);
  return (
    <section className="character-list">
      {chars.map((name, id) => (
        
        <Link to= {`/characters/${name.id}`} key={`link${id}`}><CharDetails key={name.id} char={name} /></Link>
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


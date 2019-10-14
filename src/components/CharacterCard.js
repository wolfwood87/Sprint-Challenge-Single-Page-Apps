import React from "react";
import CharacterList from './CharacterList.js';

export default function CharacterCard(props) {
  return (
    <div className="char-card">
        <img src={props.image} />
        <h2>{props.name}</h2>
        <p>{props.species}</p>
        <p>{props.origin}</p>
        <p>{props.stat}</p>
    </div>
  )
}

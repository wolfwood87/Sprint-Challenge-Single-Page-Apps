import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterList from './CharacterList.js';
import CharacterCard from './CharacterCard.js';
import App from '../App.js';

const Character = (props) => {
    const [nChar, setNChar] = useState({});

useEffect(() => {
    const id = props.match.params.id;

    axios  
        .get(`https://rickandmortyapi.com/api/character/${id}/`)
        .then(res => {
            console.log(nChar)
            setNChar(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, [props.match.params.id]);

const { name, species, image, status, index} = nChar;

return (
    <CharacterCard image={image} name={name} species={species} stat={status} key={index} />
);
}
export default Character;
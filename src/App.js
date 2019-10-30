import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm';
import Character from './components/Character.js';
import axios from 'axios';

export default function App(props) {
  const [search, setSearch] = useState({});
    const [char, setChar] = useState([])
    const [sub, setSub] = useState([]);
  const callBack = (data1, data2) => {
    setChar(data1);
    setSub(data2);
  }
  console.log(char);
  console.log(sub);
  useEffect(() => {
    axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          console.log(res);
          setSearch(res.data.results);
        })
        .catch(err => {
          console.log(err);
        })
      }, [char]);

  return (
    <main>
      <Route path = "/characters" render={(props)=> <SearchForm 
        {...props} search={search} char={char} sub={sub} callBack={callBack}/>} />
      <Link to = {"/"}><Header /></Link>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path = "/characters/" render={(props) => <CharacterList {...props} char={char} sub={sub} />} />
      <Route path="/characters/:id" component={Character} />
    </main>
  );
}

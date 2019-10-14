import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList.js';
import { Route, Link } from 'react-router-dom';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm';

export default function App() {
  return (
    <main>
      <Route path = "/" component={SearchForm} />
      <Link to = {"/"}><Header /></Link>
      <Route exact path="/" component={WelcomePage} />
      <Route path = "/characters" component={CharacterList} />
    </main>
  );
}

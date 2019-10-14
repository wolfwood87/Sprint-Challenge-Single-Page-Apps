import React from "react";
import { Link } from 'react-router-dom';
import { CardImg } from 'reactstrap';

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to = {"/characters/"}>
        <CardImg top width="100%" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" style={{height: '40rem'}}/></Link>
      </header>
    </section>
  );
}

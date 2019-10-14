import React from "react";
import CharacterList from './CharacterList.js';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function CharacterCard(props) {
  return (
    <div className="char-card">
      <Card style={{marginBottom: '5%'}}>
        <CardImg top width="100%"  src={props.image} alt="Character image" />
        <CardBody style={{backgroundColor: 'green'}}>
          <CardTitle style={{color: 'white'}}>{props.name}</CardTitle>
          <CardSubtitle style={{color: 'white'}}>{props.species}</CardSubtitle>
          <CardText style={{color: 'white'}}>{props.stat}</CardText>
        </CardBody>
      </Card>
        
    </div>
  )
}

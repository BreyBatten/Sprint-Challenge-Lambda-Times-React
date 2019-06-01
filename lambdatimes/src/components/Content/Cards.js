import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

let cardId = 0

const Cards = props => {
  return (
    <div className="cards-container">
      {/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}
      {props.cards.map(card => <Card key={cardId++} card={card} />)}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string,
    tab: PropTypes.string,
    img: PropTypes.string,
    author: PropTypes.string
  })),

}

// Make sure you include prop types for all of your incoming props

export default Cards;
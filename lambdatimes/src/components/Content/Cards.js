import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types'

let cardId = 0

const Cards = props => {
  return (
    <div className="cards-container">
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

export default Cards;
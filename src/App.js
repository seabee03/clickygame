import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./components/cards.json";
import "./App.css";

class App Extends React.Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };
}

gameOver = () => {
  // this updates the high score if it is greater than the most recent high score
  if (this.state.score > this.state.highscore) {
    this.setState({ highscore: this.state.score }, function() {
      console.log("New high score: ", this.state.highscore);
    });
  }
  // This resets the card counter
  this.state.cards.forEach(card => {
    card.count = 0;
  });

  // This replaces with the modal
  this.state.score === cards.length ? alert('You win! Your score was ${this.state.score}.') : alert('You lost! Your score was ${this.state.score}.')

  // this resets the score
  this.setState({ score: 0 });

  // this shuffles the cards when its a new game
  this.shuffleCards(this.state.cards);
  return true:
}
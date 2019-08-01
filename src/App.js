import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import cards from "./components/cards.json";
import "./App.css";

class App extends React.Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    // If the score is greater than the highscore, update it with the new high score
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log("New high score: ", this.state.highscore);
      });
    }
    // This resests the card counter
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    // This replaces with the modal
    this.state.score === cards.length ? alert("You win! The score was ${this.state.score}.") : alert("You lost! Your score was ${this.state.score}.")
    console.log("Game over. Your scare: ", this.state.score);
    // This resets the score
    this.setState({ score: 0 });
    // This shuffles the cards when its a new game
    this.shuffleCards(this.state.cards);
    return true;
  }
}
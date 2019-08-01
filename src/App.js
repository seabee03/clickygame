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

  cardClick = id => {
    this.state.cards.find((e, i) => {
      // If the clicked element's id matches an id for a card
      if (e.id === id) {
        // if the card thats clicked has a counter of zero
        if (cards[i].count === 0) {
          // This sets the clicked card as counted
          cards[i].count = cards[i].count + 1;
          this.setState({ score: this.state.score + 1}, function() {
            console.log(this.state.score)
            this.correctText()
            if (this.state.score === cards.length) {
              console.log("You won!")
              this.gameOver();
            }
          });
          // This shuffles the cards after a guess
          this.shuffleCards(this.state.cards);
          return true;
          // Else, you already clicked it and the game is over
        } else {
          this.gameOver();
        }
      };
    });
  };

  // This makes the cards random
  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // This tells you that you clicked the card and its correct
  correctText = () => {
    const div = document.getElementById("win-lose");
    div.style.opacity = 1;
    setTimeout(function() {
      div.style.opacity = 0;
    }, 750)
  }

  render () {
    return (
      <div className="wrapper">
        <Header score={this.state.score} highscore={this.state.highscore}/>
        <div className="card-container">
          {this.state.cards.map(card => (
            <Card
              cardClick={this.cardClick}
              key={card.id}
              id={card.id}
              image={card.image}
              />
          ))}
        </div>
        <div className="instructions">Click an image to begin. Try not to click the same image twice</div>
      </div>
    );
  }
}

export default App;
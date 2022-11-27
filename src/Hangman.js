import React, { Component } from "react";
import { randomWord } from "./words";
import "./Hangman.css";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";
import hangmanGame from "./HangmanGame.png";

class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    title: hangmanGame,
    images: [img0, img1, img2, img3, img4, img5, img6],
  };
  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    };
    this.reset = this.reset.bind(this);
    this.handleGuess = this.handleGuess.bind(this);
  }
  reset() {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
    });
  }
  guessedWord() {
    return this.state.answer
      .split("")
      .map((ltr) => (this.state.guessed.has(ltr) ? ltr : "_"));
  }
  handleGuess(event) {
    let ltr = event.target.value;
    this.setState((st) => ({
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      guessed: st.guessed.add(ltr),
    }));
  }
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr) => (
      <button
        key={ltr}
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
      >
        {ltr}
      </button>
    ));
  }
  render() {
    const altText = `${this.state.nWrong}/${this.props.maxWrong} guesses`;
    const correctGuess = this.guessedWord().join("") === this.state.answer;
    const gameOver = this.state.nWrong >= this.props.maxWrong;
    let gameState = this.generateButtons();
    if (correctGuess) gameState = "YOU WIN !";
    if (gameOver) gameState = "YOU LOSE !";
    return (
      <div className="Hangman">
        <img id="Hangman-title" src={this.props.title} alt="Hangman Game" />
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Guessed Wrong: {this.state.nWrong}</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer.toUpperCase()}
        </p>
        <p className="Hangman-btn">{gameState}</p>
        <button id="reset" onClick={this.reset}>
          RESTART?
        </button>
      </div>
    );
  }
}
export default Hangman;
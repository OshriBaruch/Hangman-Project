import React, { Component } from 'react';
import Score from './components/Score';
import EndGame from './components/EndGame';
import Solution from './components/Solution';
import Letters from './components/Letters';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      solution: {
        word: ["WORLD", "BANANA", "ELEVATION ACADEMY"],
        hint: ["Where are you?", "fruit", "how you know REACT?"]
      },
      index: 0,
      gameOver: false,
      score: 100,
      letterPrese: 0,
      letterStatus: this.generateLetterStatuses()
    }
  }
  generateLetterStatuses() {
    let letterStatus = {}
    for (let i = 65; i < 91; i++) { letterStatus[String.fromCharCode(i)] = false }
    letterStatus[" "] = true
    return letterStatus
  }
  generateGame = () => {
    let index = 0
    let letterStatus = this.generateLetterStatuses()
    let score = 100
    let gameOver = false
    let letterPrese = 0

    this.setState({
      letterStatus: letterStatus,
      score: score, index: index,
      gameOver: gameOver, letterPrese: letterPrese
    })
  }
  selectLetter = (letter) => {
    let letterStatus = this.state.letterStatus
    if (letterStatus[letter] !== true) {
      let score = this.state.score
      let gameOver = this.state.gameOver
      let arrOfLettersOfWord = this.state.solution.word[this.state.index].split("")
      let letterPrese = this.state.letterPrese
      let index = this.state.index

      letterStatus[letter] = true

      let isTrue = 0
      letterPrese = 0

      for (let i of arrOfLettersOfWord) {
        if (letter === i) { isTrue++ };
        if (letterStatus[i] === true) { letterPrese++ }
      }

      if (isTrue > 0) { score += 5 } else { score -= 20 }
      if (arrOfLettersOfWord.length === letterPrese) { index++; letterStatus = this.generateLetterStatuses() }
      if (this.state.solution.word.length === index) { gameOver = true }

      this.setState({
        letterStatus: letterStatus, score: score, index: index,
        gameOver: gameOver, letterPrese: letterPrese
      })
    }
  }
  render() {
    return this.state.score < 0 || this.state.gameOver === true ?
      <EndGame letterPrese={this.state.letterPrese} generateGame={this.generateGame} /> :
      <div><div id="score"><Score score={this.state.score} /></div>
        <div id="solution"><Solution letterStatus={this.state.letterStatus} index={this.state.index} solution={this.state.solution} /></div>
        <div id="letters"><Letters letterStatus={this.state.letterStatus} selectLetter={this.selectLetter} /></div></div>
  }
}

export default App;
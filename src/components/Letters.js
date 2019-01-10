import React, { Component } from 'react';
import Letter from './Letter';

class Letters extends Component {
    generateLetter = (letter) => this.props.selectLetter(letter)
    render() {
        let i = 0;
        return Object.keys(this.props.letterStatus).map(l => l !== " " ?
            <Letter generateLetter={this.generateLetter} isTrue={this.props.letterStatus[l]} letter={l} key={`hint${i++}`} /> : null
        )
    }
}

export default Letters
import React, { Component } from 'react';

class EndGame extends Component {
    generate = () => { this.props.generateGame() }
    render() {
        return <div id="gameOver">
            <h2>{this.props.letterPrese !== 0 ? "Congratulations ,no even one gess" : "Gooog JOB!!!!"}</h2>
            <button className="new-game" onClick={this.generate}>Start New Game</button>
        </div>
    }
}

export default EndGame
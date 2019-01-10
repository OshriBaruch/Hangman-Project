import React, { Component } from 'react';

class Letter extends Component {
    selectLetter = () => {
        if (this.props.generateLetter) { this.props.generateLetter(this.props.letter) }
    }
    render() {
        return <span className={this.props.generateLetter ? this.props.isTrue ? "letter statusOfTrue" : "letter statusOfFalse" : "fild"}
            onClick={this.selectLetter}>{this.props.letter === " " ? ` - ` : this.props.letter}</span>
    }
}

export default Letter
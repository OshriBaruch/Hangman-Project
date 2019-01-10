import React, { Component } from 'react';
import Letter from './Letter';

class Solution extends Component {
    render() {
        let index = this.props.index
        let word = this.props.solution.word[index]
        let arr = word.split("")
        console.log(arr)
        let i = 0;        
        return (
            <div className="solution">
                <div className="solutionFild">
                    {
                        arr.map(w => {
                            return this.props.letterStatus[w] ?
                                <Letter letter={w} key={`solution${i++}`} /> :
                                <Letter letter={' _'} key={`solution${i++}`} />
                        })
                    }
                    <h6 className="hint">{this.props.solution.hint[this.props.index]}</h6>
                </div>
            </div>
        )
    }
}

export default Solution
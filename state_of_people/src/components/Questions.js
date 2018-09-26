import React, { Component } from 'react';
import faceQuestions from '../questions/face';

class Questions extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                {faceQuestions.map(el =>
                    <h1 key={el.id}>{el.text}</h1>
                )}
            </div>
        )
    }
}

export default Questions;

import React, { Component } from 'react';
import faceQuestions from '../questions/face';
import eyesQuestions from '../questions/eyes';
import palmsQuestions from '../questions/palms';
import handsQuestions from '../questions/hands';
import shouldersQuestions from '../questions/shoulders'
import legsQuestions from '../questions/legs'

class Questions extends Component {
    constructor(props){
        super(props);
        switch(this.props.number){
            case 'Лицо': this.collectionWithQuestion = faceQuestions; break;
            case 'Глаза': this.collectionWithQuestion = eyesQuestions; break;
            case 'Ладони': this.collectionWithQuestion = palmsQuestions; break;
            case 'Руки': this.collectionWithQuestion = handsQuestions; break;
            case 'Плечи': this.collectionWithQuestion = shouldersQuestions; break;
            case 'Ноги': this.collectionWithQuestion = legsQuestions; break;
            default: break;
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
                { this.collectionWithQuestion && this.collectionWithQuestion.map(el =>
                    <div key={el.id}>
                        <input type="radio" name="dzen" value={el.id} id={el.id} />
                        <label for={el.id}>{el.text}</label>
                    </div>
                )}
            </div>
        )
    }
}

export default Questions;

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
        this.collectisonName=[];
        switch(this.props.number){
            case 'Лицо': this.collectionWithQuestion = faceQuestions; this.collectionName = 'faceQuestions'; break;
            case 'Глаза': this.collectionWithQuestion = eyesQuestions; this.collectionName = 'eyesQuestions'; break;
            case 'Ладони': this.collectionWithQuestion = palmsQuestions; this.collectionName = 'palmsQuestions'; break;
            case 'Руки': this.collectionWithQuestion = handsQuestions; this.collectionName = 'handsQuestions'; break;
            case 'Плечи': this.collectionWithQuestion = shouldersQuestions; this.collectionName = 'shouldersQuestions'; break;
            case 'Ноги': this.collectionWithQuestion = legsQuestions; this.collectionName = 'legsQuestions'; break;
            default: break;
        }
    }

    
    render() {
        return (
            <div>
                <h1 style={{ color: 'black' }} >{this.props.number}</h1>
                { this.collectionWithQuestion && this.collectionWithQuestion.map(el =>
                    <div key={el.id}>
                        <input type="radio" name={this.collectionName} value={el.id} id={el.id} onChange={() => this.props.onCheck(this.collectionName, el.id)}/>
                        <label style={{ color: 'black', marginLeft: 10}} for={el.id}>{el.text}</label>
                    </div>
                )}
            </div>
        )
    }
}

export default Questions;

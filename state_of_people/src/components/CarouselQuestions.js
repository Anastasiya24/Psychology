import React, { Component } from 'react';
import { Carousel, Well, Button } from 'react-bootstrap';
import ResultPopup from './ResultPopup';
import Questions from './Questions';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFace, getEyes, getHands, getLegs, getPalms, getShoulders } from '../actions/allActions'
import Face from '../img/face.jpg';
import Eyes from '../img/eyes.jpg';
import Palms from '../img/palms.jpg';
import Hands from '../img/hands.jpg';
import Shoulders from '../img/shoulders.jpg';
import Legs from '../img/legs.jpg';
import { checkResult } from '../actions/checkResult';
//ui
import './style.css';

const arr = [
    { id: 1, title: 'Глаза', im: Eyes },
    { id: 2, title: 'Лицо', im: Face },
    { id: 3, title: 'Плечи', im: Shoulders },
    { id: 4, title: 'Руки', im: Hands },        
    { id: 5, title: 'Ладони', im: Palms },
    { id: 6, title: 'Ноги', im: Legs }
];

class ControlledCarousel extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            index: 0,
            direction: null,
            openResult: false
        };
        this.onClickResult = this.onClickResult.bind(this);
        this.onClosePopup = this.onClosePopup.bind(this);
        this.onCheck = this.onCheck.bind(this);
    };

    handleSelect(selectedIndex, e) {
        console.log(`selected=${selectedIndex}, direction=${e.direction}`);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    };

    onClosePopup() {
        this.setState({
            openResult: false
        })
    };

    onClickResult() {
        console.log(this.props.face.choice);
        if (this.props.face.choice.length !== 0 ||
            this.props.eyes.choice.length !== 0 ||
            this.props.hands.choice.length !== 0 ||
            this.props.legs.choice.length !== 0 ||
            this.props.palms.choice.length !== 0 ||
            this.props.shoulders.choice.length !== 0) {
            let u = [
                this.props.eyes.choice,
                this.props.face.choice,
                this.props.hands.choice,
                this.props.legs.choice,
                this.props.palms.choice,
                this.props.shoulders.choice
            ];
            let us = u.filter(Number);
            this.setState({
                openResult:
                    <ResultPopup
                        text={checkResult(us, "result")}
                        description={checkResult(us, "description")}
                        onClosePopup={this.onClosePopup}
                        onClickResult={this.props.onClickResult}
                    />
            });
        }
        else alert('Вы не выбрали критерии!')
    };

    onCheck(collectionName, id) {
        switch (collectionName) {
            case 'faceQuestions': this.props.getFace(id); break;
            case 'eyesQuestions': this.props.getEyes(id); break;
            case 'palmsQuestions': this.props.getPalms(id); break;
            case 'handsQuestions': this.props.getHands(id); break;
            case 'shouldersQuestions': this.props.getShoulders(id); break;
            case 'legsQuestions': this.props.getLegs(id); break;
            default: break;
        }
    };

    render() {
        const { index, direction } = this.state;
        return (
            <center className='humanPart'>
                {this.state.openResult}
                <div style={{ width: '900px', height: '1000px' }}>
                    <Well style={{ backgroundColor: '#EEEEEE' }}>
                        <Carousel
                            activeIndex={this.props.activePage || index}
                            direction={direction}
                            onSelect={this.handleSelect}
                        >
                            {arr.map(el =>
                                <Carousel.Item key={el.id}>
                                    <img src={el.im} alt='' style={{ opacity: 0.3, width: '700px', height: '400px' }} />
                                    <Carousel.Caption>
                                        <center style={{ padding: '10px' }}>
                                            <Questions
                                                number={el.title}
                                                onCheck={this.onCheck}
                                            />
                                            {el.id === 6 &&
                                                <Button bsStyle="info" onClick={this.onClickResult}>Результат</Button>
                                            }
                                        </center>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            )}
                        </Carousel>
                    </Well>
                </div>
            </center>
        );
    };
};

function mapStateToProps(state) {
    return {
        face: state.facePage,
        eyes: state.eyesPage,
        hands: state.handsPage,
        legs: state.legsPage,
        palms: state.palmsPage,
        shoulders: state.shouldersPage
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getFace, getEyes, getHands, getLegs, getPalms, getShoulders }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledCarousel);
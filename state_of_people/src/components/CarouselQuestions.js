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
import Legs from '../img/legs.jpg'

const arr = [
    { id: 1, title: 'Лицо', im: Face },
    { id: 2, title: 'Глаза', im: Eyes },
    { id: 3, title: 'Ладони', im: Palms },
    { id: 4, title: 'Руки', im: Hands },
    { id: 5, title: 'Плечи', im: Shoulders },
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
        this.setState({
            openResult:
                <ResultPopup
                    onClosePopup={this.onClosePopup}
                    onClickResult={this.props.onClickResult}
                />
        })
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
            <Well style={{ backgroundColor: 'yellow' }}>
                {this.state.openResult}
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                >
                    {arr.map(el =>
                        <Carousel.Item key={el.id}>
                            <img src={el.im} alt='' style={{ opacity: 0.5 }} />
                            <Carousel.Caption>
                                <center style={{ padding: '100px' }}>
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
        );
    };
};

function mapStateToProps(state) {
    return {
        face: state.face || null
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getFace, getEyes, getHands, getLegs, getPalms, getShoulders }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlledCarousel);
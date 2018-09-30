import React, { Component } from 'react';
import { Carousel, Well } from 'react-bootstrap';
import ResultPopup from './ResultPopup';
import Questions from './Questions';
//redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFace, getEyes, getHands, getLegs, getPalms, getShoulders } from '../actions/allActions'

const arr = [
    { id: 1, title: 'Лицо' },
    { id: 2, title: 'Глаза' },
    { id: 3, title: 'Ладони' },
    { id: 4, title: 'Руки' },
    { id: 5, title: 'Плечи' },
    { id: 6, title: 'Ноги' }
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
            openResult: <ResultPopup onClosePopup={this.onClosePopup} />
        })
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
                            <center style={{ padding: '100px' }}>
                                <Questions number={el.title} />
                                {el.id === 6 &&
                                    <button onClick={this.onClickResult}>Результат</button>
                                }
                            </center>
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
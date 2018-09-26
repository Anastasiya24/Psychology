import React, { Component } from 'react';
import { Carousel, Well } from 'react-bootstrap';
import ResultPopup from './ResultPopup';
import Questions from './Questions';

const arr = [
    { id: 1, title: 1 },
    { id: 2, title: 2 },
    { id: 3, title: 3 },
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
                                <h3>Label № {el.title}</h3>
                                <Questions number={el.id} />
                                {el.id === 3 &&
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

export default ControlledCarousel;
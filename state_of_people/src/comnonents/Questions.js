import React, { Component } from 'react';
// import PeoplePart from './PeoplePart'
//ui
import ControlledCarousel from './CarouselQuestions'

class Questions extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.questions &&
                    // <PeoplePart />
                    <ControlledCarousel />
                }
            </div>
        )
    }
}

export default Questions;

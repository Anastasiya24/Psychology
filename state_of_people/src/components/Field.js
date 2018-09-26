import React, { Component } from 'react';
//ui
import ControlledCarousel from './CarouselQuestions'

class Field extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                {this.props.questions &&
                    <ControlledCarousel />
                }
            </div>
        )
    }
}

export default Field;

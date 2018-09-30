import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    };  
}

function mapStateToProps(state) {
    return {
        face: state.face || null
    };
};

export default connect(mapStateToProps)(Field);

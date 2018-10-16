import React, { Component } from 'react';
import { connect } from 'react-redux';
//ui
import ControlledCarousel from './CarouselQuestions'

class Field extends Component {
    render() {
        return (
            <div>
                <center style={{ margin: '50px', padding: '30px', border: '3px solid green' }}>
                    <h1>{this.props.title}</h1>
                </center>
                {this.props.questions &&
                    <ControlledCarousel
                        onClickResult={this.props.onClickResult}
                    />
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

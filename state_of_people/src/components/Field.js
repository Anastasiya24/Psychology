import React, { Component } from 'react';
import { connect } from 'react-redux';
//ui
import ControlledCarousel from './CarouselQuestions'
import "./style.css"
//
import Eyes from '../img/part/eyes1.png'
import Face from '../img/part/face1.png'
import Shoulders from '../img/part/shoulders1.png'
import Hands from '../img/part/hands1.png'
import Palms from '../img/part/palms1.png'
import Legs from '../img/part/legs1.png'


class Field extends Component {
    state = {
        onClickEyes: false,
        onClickFace: false,
        onClickShoulders: false,
        onClickHands: false,
        onClickPalms: false,
        onClickLegs: false,
        activePage: ''
    }

    onFalsePart() {
        this.setState({
            onClickEyes: false,
            onClickFace: false,
            onClickShoulders: false,
            onClickHands: false,
            onClickPalms: false,
            onClickLegs: false,
        })
    }

    onClickPart(part) {
        this.onFalsePart();
        switch (part) {
            case 'eyes': this.setState({ onClickEyes: true, activePage: 0 }); break;
            case 'face': this.setState({ onClickFace: true, activePage: 1  }); break;
            case 'shoulders': this.setState({ onClickShoulders: true, activePage: 2  }); break;
            case 'hands': this.setState({ onClickHands: true, activePage: 3  }); break;
            case 'palms': this.setState({ onClickPalms: true, activePage: 4  }); break;
            case 'legs': this.setState({ onClickLegs: true, activePage: 5  }); break;
            default: break;
        }
    }

    render() {
        const { onClickEyes, onClickFace, onClickShoulders, onClickHands, onClickPalms, onClickLegs } = this.state;
        return (
            <div>
                <center style={{ margin: '50px', padding: '30px', border: '3px solid green' }}>
                    <h1>{this.props.title}</h1>
                </center>
                {this.props.questions &&
                    <div>
                        <div className='humanPart'>
                            <div onClick={this.onClickPart.bind(this, 'eyes')}
                                className={onClickEyes ? 'onChosen' : 'noNotChosen'}>
                                <img src={Eyes} alt="eyes" className='image'/>
                            </div>
                            <div onClick={this.onClickPart.bind(this, 'face')}
                                className={onClickFace ? 'onChosen' : 'noNotChosen'}>
                                <img src={Face} alt="face" className='image' />
                            </div>
                            <div onClick={this.onClickPart.bind(this, 'shoulders')}
                                className={onClickShoulders ? 'onChosen' : 'noNotChosen'}>
                                <img src={Shoulders} alt="shoulder" className='image' />
                            </div>
                            <div onClick={this.onClickPart.bind(this, 'hands')}
                                className={onClickHands ? 'onChosen' : 'noNotChosen'}>
                                <img src={Hands} alt="hands" className='image'/>
                            </div>
                            <div onClick={this.onClickPart.bind(this, 'palms')}
                                className={onClickPalms ? 'onChosen' : 'noNotChosen'}>
                                <img src={Palms} alt="palms" className='image'/>
                            </div>
                            <div onClick={this.onClickPart.bind(this, 'legs')}
                                className={onClickLegs ? 'onChosen' : 'noNotChosen'}>
                                <img src={Legs} alt="legs" className='image' />
                            </div>
                        </div>
                        <ControlledCarousel
                            onClickResult={this.props.onClickResult}
                            activePage={this.state.activePage}
                        />
                    </div>
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

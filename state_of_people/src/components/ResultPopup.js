import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ResultPopup extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleHide = this.handleHide.bind(this);
        this.state = {
            show: false
        };
    }

    handleHide() {
        this.props.onClosePopup();
        this.props.onClickResult();
    }

    render() {
        return (
            <div className="modal-container" style={{ height: 200 }}>
                <Modal
                    show={true}
                    onHide={this.handleHide}
                    container={this}
                    aria-labelledby="contained-modal-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">
                            Результат
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.text}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button bsStyle="success" onClick={this.handleHide}>Подробнее</Button>                        
                        <Button onClick={this.handleHide}>Закрыть</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ResultPopup;
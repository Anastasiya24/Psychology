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
                            Contained Modal
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                        ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ResultPopup;
import React from 'react';
import { Alert, Button } from 'react-bootstrap';

export default class ResponseDescription extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleDismiss = this.handleDismiss.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.state = {
            show: false
        };
    }

    handleDismiss() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    render() {
        if (this.state.show) {
            return (
                <Alert bsStyle="success" 
                onDismiss={this.handleDismiss}
                style={{textAlign: 'left'}}
                >
                    <p>{this.props.description}</p>
                    <p><Button onClick={this.handleDismiss}>Скрыть подробности</Button></p>
                </Alert>
            );
        }
        return <Button onClick={this.handleShow}>Подробности</Button>;
    }
}



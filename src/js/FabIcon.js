import React, {Component} from "react";
import {withCookies} from "react-cookie";
import {Fab} from "@material/react-fab";
import {Modal, Button} from 'react-bootstrap';
import '@material/react-fab/dist/fab.css';
import '../css/FabIcon.css';

class FabIcon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlePost = this.handlePost.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handlePost() {

    }

    render() {
        return(
            <div className="fab-container">
                <Fab icon={<span className="material-icons"><i className="fas fa-plus-circle"/></span>} onClick={this.handleShow}/>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Post your picture!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" id="customFile" accept="image/x-png,image/gif,image/jpeg"/>
                                <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div>

                            <textarea type="text" id="description" placeholder="Description"/>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={this.handlePost}>
                                Post
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default withCookies(FabIcon);
import React, {Component} from "react";
import {withCookies} from "react-cookie";
import {Modal, Button} from 'react-bootstrap';
import '../css/AddIcon.css';

class AddIcon extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false,
            file: "Choose file",
            files: null,
            description: null
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handlePost = this.handlePost.bind(this);

        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleFileChange(e) {
        this.setState({
            file: e.target.files[0].name,
            files: e.target.files
        });
    }

    handleDescriptionChange(e) {
        this.setState({
            description: e.target.value
        })
    }

    handlePost() {
        const {cookies} = this.props;
        const formData = new FormData();

        formData.append('imageFile', this.state.files[0]);
        formData.append('id', cookies.get('insta-id'));

        fetch(process.env.REACT_APP_API_URL + '/posts/post', {
            method: 'post',
            mode: 'cors',
            body: formData
        }).then(response => {
            response.json().then(data => {
               this.handleClose();
            });
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return(
            <div className="fab-container">
                <span className="material-icons"><i className="fas fa-plus-circle" onClick={this.handleShow}/></span>

                <div>
                    <Modal show={this.state.show} onHide={this.handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Post your picture!</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="custom-file">
                                <input type="file" className="custom-file-input" name="file" id="customFile" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleFileChange} placeholder="File"/>
                                <label className="custom-file-label" htmlFor="customFile">{this.state.file}</label>
                            </div>
                            <textarea id="description" placeholder="Description" name="description" onChange={this.handleDescriptionChange} required/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Close
                            </Button>
                            <Button type="submit" variant="primary" onClick={this.handlePost}>
                                Post
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default withCookies(AddIcon);
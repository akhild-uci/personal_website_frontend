import React, { Component } from 'react';
import PropType from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Zotnseek from './Zotnseek';
import Antz from './Antz';
import PersonalSite from './PersonalSite';


class ProjectModal extends Component {
    
    modalBody = () => {
        switch(this.props.project) {
            case "Zotnseek":
                return ( <Zotnseek /> );
            case "Antz":
                return ( <Antz /> );
            case "PersonalSite":
                return ( <PersonalSite /> );
            default:
                return ( <p>Project in the works!</p> )
        }
    }

    render() {
        return (
            <Modal centered show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Body>
                    <this.modalBody />
                </Modal.Body>
            </Modal>
        )
    }
}

// PropTypes
ProjectModal.propType = {
    show: PropType.bool.isRequired,
    handleClose: PropType.func.isRequired,
    project: PropType.string.isRequired,
}


export default ProjectModal;

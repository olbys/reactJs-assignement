import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './cardContainer.module.css';
import {Card, Button, Modal, ModalDialog, ModalBody} from 'react-bootstrap';
import {render} from "react-dom";



function CardContainer(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card style={{width: '45%', marginTop: "1rem", marginLeft: '1rem', display:'inline-block'}}>
                <Card.Body>
                    <Card.Title>
                        <>
                            <Button variant="primary" size="md" onClick={handleShow}>
                                {props.button}
                            </Button>
                        </>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"> </Card.Subtitle>
                    <Card.Text>
                    </Card.Text>
                    <fieldset>
                        <legend>  {props.title}</legend>
                        {props.content}
                    </fieldset>

                    <div style={{textAlign: 'center'}}>
                        <hr/>
                        <Card.Link href="#">lien footer 1 </Card.Link>
                        <Card.Link href="#">lien footer 2 </Card.Link>
                    </div>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title> Title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   Content of modal.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="default"  onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleClose}>OK</Button>
                </Modal.Footer>
            </Modal></>
    );
}

//CardContainer.propTypes = {};

// CardContainer.defaultProps = {};

export default CardContainer;

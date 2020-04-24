import ReactDOM from 'react-dom';
import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react';
import Button from '../FormElements/Button';
import Map from './Map';
import './ModalOverlay.css';

const ModalOverlay = props => { 

  return ( 
      <Modal className="modal"
        show={props.show}
        onHide={props.hide}
      >
        <Modal.Header className="modal-container" closeButton>
          <Modal.Title>
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-container">
         <Map center = {props.coordinates} zoom={16}/>
        </Modal.Body>
       

      </Modal>   
  );

};
export default ModalOverlay;
  
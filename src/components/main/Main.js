import React, { useState } from "react";
import { Button, Modal, Container } from "react-bootstrap";
import Slider from "./Slider";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Main.css";

function Main() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="wrapper">
      <Container>
        <div className="jumbotron">
          <h1 className="display-4">Hello! <i className = "bi bi-emoji-smile fa-xs text-success"></i></h1>
         
          <p className = "para">
            This page is about my favorite drinks.
          </p>
          <Button variant="primary" onClick={handleShow}>
            See more
          </Button>
        </div>
        <Slider />
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>And the winner is...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="d-block w-100  myImg"
            src="https://cdn.pixabay.com/photo/2018/07/08/15/30/wheat-beer-3524111_960_720.jpg"
            alt="Third slide"
          />
          <h6>It's no coincedence that beer rhymes with cheer.</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            className="customBtn"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Main;

import React, { useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

function AddBookForm(props) {
  const bookIdRef = useRef();
  const nameRef = useRef();
  const authorRef = useRef();
  const categoryRef = useRef();
  const quantityRef = useRef();

  const submitBook = (e) => {
    e.preventDefault();
    const BookID = bookIdRef.current.value;
    const BookName = nameRef.current.value;
    const Author = authorRef.current.value;
    const Category = categoryRef.current.value;
    const Quantity = quantityRef.current.value;
    const formData = {
      BookID,
      BookName,
      Author,
      Category,
      Quantity,
    };
    console.log(formData);
    props.addBook(formData);
  };
  return (
    <div>
      <Form onSubmit={submitBook}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridId">
              <Form.Label>Book ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Book Id"
                ref={bookIdRef}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridQuantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                ref={quantityRef}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label>Book Name</Form.Label>
              <Form.Control type="text" placeholder="Book name" ref={nameRef} />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                ref={authorRef}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Category"
                ref={categoryRef}
              />
            </Form.Group>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Modal.Footer>
      </Form>
    </div>
  );
}

export default AddBookForm;

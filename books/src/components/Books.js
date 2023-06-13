import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal } from "react-bootstrap";
import AddBookForm from "./AddBookForm";

const books = [
  {
    BookID: 1,
    BookName: "Now a days We more",
    Author: "AK sharma",
    Category: "Inspirational",
    Quantity: 10,
  },
  {
    BookID: 2,
    BookName: "Poor Dad",
    Author: "AK sharma",
    Category: "Inspirational",
    Quantity: 10,
  },
  {
    BookID: 4,
    BookName: "Shiv charitra",
    Author: "Gokhale",
    Category: "Kadambari",
    Quantity: 10,
  },
  {
    BookID: 8,
    BookName: "Very Simple",
    Author: "AK sharma",
    Category: "Inspirational",
    Quantity: 10,
  },
];

function Books() {
  const [show, setShow] = useState(false);
  const [booksData, setBooksData] = useState([]);
  useEffect(() => {
    setBooksData(books);
  }, []);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const addBook = (data) => {
    console.log("new book data ::", data);
    console.log("booksData=>", booksData);
    const updatedBooks = [...booksData, data];
    console.log("updatedBooks =>", updatedBooks);
    setBooksData(updatedBooks);
    handleClose();
  };
  return (
    <div>
      <Container>
        <Button className="my-2" onClick={handleShow}>
          + Add Book
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {booksData?.map((book) => {
              return (
                <tr key={book.BookID}>
                  <td>{book.BookID}</td>
                  <td>{book.BookName}</td>
                  <td>{book.Author}</td>
                  <td>{book.Category}</td>
                  <td>{book.Quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <AddBookForm
          handleClose={handleClose}
          handleShow={handleShow}
          addBook={addBook}
        />
      </Modal>
    </div>
  );
}

export default Books;

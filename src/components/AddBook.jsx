import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { bookService } from "../services/books.services";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook();
  };

  const navigate = useNavigate();

  const addBook = async () => {
    const newBook = {
      title: formData.title,
      author: formData.author,
      status: formData.status,
    };
    var ret = await bookService.addBook(newBook);
    console.log(ret);
    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  return (
    <div className="p-4 box">
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <InputGroup>
            <InputGroup.Text id="formBookTitle"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book Title"
              value={formData.title}
              name="title"
              onChange={handleChange}
            ></Form.Control>
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <InputGroup.Text id="formBookAuthor"></InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Book Author"
              value={formData.author}
              name="author"
              onChange={handleChange}
            ></Form.Control>
          </InputGroup>
          <Form.Select
            value={formData.status}
            name="status"
            onChange={handleChange}
          >
            <option value="Available">Available</option>
            <option value="Not Available">Not Available</option>
          </Form.Select>
          <div>
            <Button type="submit">Submit</Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddBook;

import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { bookService } from "../services/books.services";
import { useNavigate } from "react-router-dom";

const BookLists = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const fetchBooks = async () => {
    const data = await bookService.getAllBooks();
    var newData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setBooks(newData);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <Table striped bordered size="sm">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Title</th>
            <th>Author</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    onClick={() => {
                      navigate("/edit", {
                        state: {
                          id: item.id,
                          title: item.title,
                          author: item.author,
                          status: item.status,
                        },
                      });
                    }}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={async () => {
                      await bookService.deleteBook(item.id);
                      fetchBooks();
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default BookLists;

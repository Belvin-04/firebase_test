import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BookLists from "./components/BookLists";
import { Col, Container, Row } from "react-bootstrap";
import AddBook from "./components/AddBook";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import EditBook from "./components/EditBook";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<BookLists />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/edit" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

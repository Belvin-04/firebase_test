import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/" className="nav-link active">
              Home
            </Link>
            <Link to="/add" className="nav-link">
              {" "}
              Add Book{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

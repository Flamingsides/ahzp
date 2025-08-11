import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

// Left aligned on the navbar
var navbar = {
  left: [
    { link: "/engineering", label: "Engineering" },
    { link: "/architecture", label: "Architecture" },
  ],

  right: [
    { link: "/about-us", label: "About Us" },
    { link: "/testimonials", label: "Testimonials" },
    { link: "/contact-us", label: "Contact Us" },
  ],
};

function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {navbar.left.map((elem) => (
              <li className="nav-item" key={elem.link}>
                <Link
                  to={elem.link}
                  className={`nav-link hover-underline ${
                    location.pathname === elem.link ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  <p>{elem.label}</p>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ms-auto">
            {navbar.right.map((elem) => (
              <li className="nav-item" key={elem.link}>
                <Link
                  to={elem.link}
                  className={`nav-link hover-underline ${
                    location.pathname === elem.link ? "active" : ""
                  }`}
                  aria-current="page"
                >
                  <p>{elem.label}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

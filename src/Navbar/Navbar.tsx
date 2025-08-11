import { Link, useLocation } from "react-router-dom";

import "./Navbar.css";

interface Props {
  theme: string;
  toggleDarkMode: () => void;
}

const logoDark = "assets/ahzp-logo-rect-simple-bgless-dark.png";
const logoLight = "assets/ahzp-logo-rect-simple-bgless.png";

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

function Navbar({ theme, toggleDarkMode }: Props) {
  const location = useLocation();

  return (
    <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="Company Logo"
            className="logo d-inline-block align-text-top img-fluid"
          />
        </Link>
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
        <button className="darkmode-toggler nav-item" onClick={toggleDarkMode}>
          <svg
            id="darkmode-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Z" />
          </svg>
          <svg
            id="lightmode-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
          >
            <path d="M480-280q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

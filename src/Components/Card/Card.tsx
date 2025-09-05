import "./Card.css";

import { Link } from "react-router-dom";

interface Props {
  theme: string;
  bgLight: string;
  bgDark: string;
  title: string;
  desc: string;
  link: string;
  linkText: string;
}

function Card({ theme, bgLight, bgDark, title, desc, link, linkText }: Props) {
  return (
    <div className="card">
      <div
        className="card-img-top"
        style={{
          backgroundImage: theme === "dark" ? bgDark : bgLight,
        }}
      ></div>
      <div className="card-body">
        {/* <h5 id="title" className="card-title fw-light"> */}
        <h5 id="title">{title}</h5>
        {/* <p className="card-text">{desc}</p> */}
        <p id="desc">{desc}</p>
        <Link className="btn btn-primary" to={link}>
          {linkText}
        </Link>
      </div>
    </div>
  );
}

export default Card;

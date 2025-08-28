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
          backgroundImage: theme === "dark" ? bgLight : bgDark,
        }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <Link to={link}>{linkText}</Link>
      </div>
    </div>
  );
}

export default Card;

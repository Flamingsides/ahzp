import { Link } from "react-router-dom";

import "./PageNotFound.css";

function PageNotFound() {
  return (
    <div id="page-not-found">
      <h1>Oops!</h1>
      <p>
        The page you are looking for does not exist. Please ensure the URL is
        correct.
      </p>
      <Link
        to="/"
        className="btn btn-primary btn-lg"
        role="button"
        aria-disabled="true"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;

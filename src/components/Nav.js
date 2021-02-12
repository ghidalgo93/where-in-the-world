import "../styles/App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link className={"react-link"} to="/">
        <h3>Where In The World</h3>
      </Link>
      <ul className={"nav-links"}>
        <Link className={"react-link"} to="/">
          <li>Play</li>
        </Link>
        <Link className={"react-link"} to="/about">
          <li>About</li>
        </Link>
        <Link className={"react-link"} to="/docs">
          <li>Docs</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

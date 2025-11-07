import { Link } from "wouter";

function Navigation() {
  return (
    <>
      <nav>
        <Link to="/">HOMEPAGE</Link> | <Link to="/about">ABOUT</Link> |{" "}
        <Link to="/gallery">GALLERY</Link> | <Link to="/pokemon">POKENON</Link>{" "}
        |
      </nav>
    </>
  );
}

export default Navigation;

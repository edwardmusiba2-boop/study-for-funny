import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Study For Funny</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/study-tips">Study Tips</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
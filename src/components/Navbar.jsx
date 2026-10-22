import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <ul className="flex items-center justify-center gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

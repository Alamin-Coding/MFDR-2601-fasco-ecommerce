import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div className="flex py-18 items-center justify-between gap-14.5">
          <div>
            <img src="./src/assets/FASCO.png" alt="logo" />
          </div>
          <div className="flex gap-14.5">
            <ul className="flex items-center justify-end gap-14.5">
              <li className="font-poppins font-normal text-heading text-[16px]">
                <Link to="/">Home</Link>
              </li>
              <li className="font-poppins font-normal text-heading text-[16px]">
                <Link to="/products">Shop</Link>
              </li>
              <li className="font-poppins font-normal text-heading text-[16px]">
                <Link to="/">New Arrivals</Link>
              </li>
              <li className="font-poppins font-normal text-heading text-[16px]" >
                <Link to="/">Packages</Link>
              </li>
              <li className="font-poppins font-normal text-heading text-[16px]">
                <Link to="/login">Sign In</Link>
              </li>
            </ul>

            <button className="common_button_black" link="/signup">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

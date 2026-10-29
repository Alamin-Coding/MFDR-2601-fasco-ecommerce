import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer.jsx";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Root;

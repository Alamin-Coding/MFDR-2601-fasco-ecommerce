import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Fashion from "./Fashion";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>Footer</footer>
      <Fashion/>

    </div>
  );
};

export default Root;

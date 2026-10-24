import { Outlet } from "react-router";
import Navbar from "./Navbar";
import NewArrival from "./NewArrival";

const Root = () => {
  return (
    <div>
      <Navbar />
      <NewArrival/>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
};

export default Root;

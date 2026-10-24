
import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import ProductDetail from "../components/ProductDetail";

import FollowUp from "../components/FollowUp";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
        <NewArrival/>
        <ProductDetail/>
        <FollowUp />
        <div>New line add</div>
      </div>
    </>
  );
};

export default HomePage;

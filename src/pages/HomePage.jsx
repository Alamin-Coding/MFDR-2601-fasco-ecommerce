import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import ProductDetail from "../components/ProductDetail";

import FollowUp from "../components/FollowUp";
import Newsletter from "../components/Newsletter";

const HomePage = () => {
  return (
    <>
      <div>
        <Banner />
        <NewArrival />
        <ProductDetail />
        <FollowUp />
        <Newsletter />
      </div>
    </>
  );
};

export default HomePage;

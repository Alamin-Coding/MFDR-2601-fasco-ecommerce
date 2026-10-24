import Banner from "../components/Banner";
import NewArrival from "../components/NewArrival";
import ProductDetail from "../components/ProductDetail";

const HomePage = () => {
  return (
    <>
      <section>
        <Banner />
        <NewArrival/>
        <ProductDetail/>
      </section>
    </>
  );
};

export default HomePage;

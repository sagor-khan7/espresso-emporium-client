import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import ShowCase from "../components/ShowCase";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="bg-[#ECEAE3]">
        <ShowCase />
      </section>
      <Products />
      <Gallery />
    </div>
  );
};

export default Home;

import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import ShowCase from "../components/ShowCase";

const Home = () => {
  const loadedData = useLoaderData();

  return (
    <div>
      <Banner />
      <section className="bg-[#ECEAE3]">
        <ShowCase />
      </section>
      <Products coffees={loadedData} />
      <Gallery />
    </div>
  );
};

export default Home;

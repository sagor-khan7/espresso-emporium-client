import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import ShowCase from "../components/ShowCase";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="bg-[#ECEAE3]">
        <ShowCase />
      </section>
      <Gallery />
    </div>
  );
};

export default Home;

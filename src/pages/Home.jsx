import Banner from "../components/Banner";
import ShowCase from "../components/ShowCase";

const Home = () => {
  return (
    <div>
      <Banner />
      <section className="bg-[#ECEAE3]">
        <ShowCase />
      </section>
    </div>
  );
};

export default Home;

import bgImg from "../assets/more/3.png";

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-[500px] md:h-[800px] flex items-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="container mx-auto px-4">
        <div className="md:grid md:grid-cols-3 lg:grid-cols-2 justify-between text-white">
          <div className="col-span-1"></div>
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="text-4xl md:text-6xl">
              Would you like a Cup of Delicious Coffee?
            </h2>
            <p className="mt-4 text-sm">
              It’s coffee time - Sip &amp; Savor - Relaxation in every sip! Get
              the nostalgia back! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="mt-6 font-rancho px-5 py-2 text-black text-2xl bg-[#E3B577]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import cup1 from "../assets/cups/cup1.png";
import cup2 from "../assets/cups/cup2.png";
import cup3 from "../assets/cups/cup3.png";
import cup4 from "../assets/cups/cup4.png";
import cup5 from "../assets/cups/cup5.png";
import cup6 from "../assets/cups/cup6.png";
import cup7 from "../assets/cups/cup7.png";
import cup8 from "../assets/cups/cup8.png";

const Gallery = () => {
  return (
    <section className="mt-28 max-w-10/12 md:max-w-9/12 mx-auto">
      <p className="text-[#1B1A1A] text-center">Follow Us Now</p>
      <h2 className="text-[#331A15] md:text-5xl text-4xl text-center">
        Follow on Instagram
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12">
        <img src={cup1} alt="coffee image" />
        <img src={cup2} alt="coffee image" />
        <img src={cup3} alt="coffee image" />
        <img src={cup4} alt="coffee image" />
        <img src={cup5} alt="coffee image" />
        <img src={cup6} alt="coffee image" />
        <img src={cup7} alt="coffee image" />
        <img src={cup8} alt="coffee image" />
      </div>
    </section>
  );
};

export default Gallery;

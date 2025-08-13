import cup from "../assets/icons/1.png";
import badge from "../assets/icons/2.png";
import beans from "../assets/icons/3.png";
import coffee from "../assets/icons/4.png";

const ShowCase = () => {
  return (
    <div className="max-w-10/12 md:max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
      <div>
        <img src={cup} alt="cup icon" />
        <h3 className="text-4xl text-[#331A15] mt-4 mb-2">Awesome Aroma</h3>
        <p className="text-[#1B1A1A] leading-7">
          You will definitely be a fan of the design & aroma of your coffee
        </p>
      </div>
      <div>
        <img src={badge} alt="badge icon" />
        <h3 className="text-4xl text-[#331A15] mt-4 mb-2">High Quality</h3>
        <p className="text-[#1B1A1A] leading-7">
          We served the coffee to you maintaining the best quality
        </p>
      </div>
      <div>
        <img src={beans} alt="beans icon" />
        <h3 className="text-4xl text-[#331A15] mt-4 mb-2">Pure Grades</h3>
        <p className="text-[#1B1A1A] leading-7">
          The coffee is made of the green coffee beans which you will love
        </p>
      </div>
      <div>
        <img src={coffee} alt="coffee mug icon" />
        <h3 className="text-4xl text-[#331A15] mt-4 mb-2">Proper Roasting</h3>
        <p className="text-[#1B1A1A] leading-7">
          Your coffee is brewed by first roasting the green coffee beans
        </p>
      </div>
    </div>
  );
};

export default ShowCase;

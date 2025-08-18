import { Link } from "react-router-dom";
import bgImg from "../assets/more/1.png";
import { BsCup } from "react-icons/bs";

import Coffee from "./Coffee";

const Products = ({ coffees, onDelete }) => {
  return (
    <div
      className="mt-28"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-10/12 md:max-w-9/12 mx-auto">
        <p className="text-[#1B1A1A] text-center">--- Sip & Savor ---</p>
        <h2 className="text-[#331A15] md:text-5xl text-4xl text-center">
          Our Popular Products
        </h2>
        <Link
          to="add-coffee"
          className="mt-6 w-fit mx-auto flex items-center gap-2 rounded-md font-rancho px-5 py-2 border-2 border-[#331A15] text-white text-2xl bg-[#E3B577]"
        >
          Add Coffee
          <BsCup className="text-[#331A15]" />
        </Link>

        {/* products cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-6">
          {coffees.map((coffee) => (
            <Coffee key={coffee._id} coffee={coffee} onDelete={onDelete}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

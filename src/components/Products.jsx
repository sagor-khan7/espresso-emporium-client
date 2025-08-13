import { Link } from "react-router-dom";
import bgImg from "../assets/more/1.png";
import { BsCup } from "react-icons/bs";
import coffeeImg from "../assets/cups/cup1.png";
import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Products = () => {
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
          <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
            <img
              className="md:max-w-48 md:max-h-60"
              src={coffeeImg}
              alt="coffee mug img"
            />
            <div className="space-y-4 my-auto">
              <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
                Chef:{" "}
                <span className="text-[#5C5B5B] font-normal">Mr. John Doe</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold">
                Price:{" "}
                <span className="text-[#5C5B5B] font-normal">890 Taka</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
                Name:{" "}
                <span className="text-[#5C5B5B] font-normal">
                  Americano Coffee
                </span>
              </p>
            </div>
            <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
              <FaEye className="bg-[#D2B48C] p-2 rounded-md" />
              <FaPen className="bg-[#3C393B] p-2 rounded-md" />
              <MdDelete className="bg-[#EA4744] p-2 rounded-md" />
            </div>
          </div>

          {/* will be deleted */}
          <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
            <img
              className="md:max-w-48 md:max-h-60"
              src={coffeeImg}
              alt="coffee mug img"
            />
            <div className="space-y-4 my-auto">
              <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
                Chef:{" "}
                <span className="text-[#5C5B5B] font-normal">Mr. John Doe</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold">
                Price:{" "}
                <span className="text-[#5C5B5B] font-normal">890 Taka</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
                Name:{" "}
                <span className="text-[#5C5B5B] font-normal">
                  Americano Coffee
                </span>
              </p>
            </div>
            <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
              <FaEye className="bg-[#D2B48C] p-2 rounded-md" />
              <FaPen className="bg-[#3C393B] p-2 rounded-md" />
              <MdDelete className="bg-[#EA4744] p-2 rounded-md" />
            </div>
          </div>
          {/* will be deleted */}
          <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
            <img
              className="md:max-w-48 md:max-h-60"
              src={coffeeImg}
              alt="coffee mug img"
            />
            <div className="space-y-4 my-auto">
              <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
                Chef:{" "}
                <span className="text-[#5C5B5B] font-normal">Mr. John Doe</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold">
                Price:{" "}
                <span className="text-[#5C5B5B] font-normal">890 Taka</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
                Name:{" "}
                <span className="text-[#5C5B5B] font-normal">
                  Americano Coffee
                </span>
              </p>
            </div>
            <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
              <FaEye className="bg-[#D2B48C] p-2 rounded-md" />
              <FaPen className="bg-[#3C393B] p-2 rounded-md" />
              <MdDelete className="bg-[#EA4744] p-2 rounded-md" />
            </div>
          </div>
          {/* will be deleted */}
          <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
            <img
              className="md:max-w-48 md:max-h-60"
              src={coffeeImg}
              alt="coffee mug img"
            />
            <div className="space-y-4 my-auto">
              <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
                Chef:{" "}
                <span className="text-[#5C5B5B] font-normal">Mr. John Doe</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold">
                Price:{" "}
                <span className="text-[#5C5B5B] font-normal">890 Taka</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
                Name:{" "}
                <span className="text-[#5C5B5B] font-normal">
                  Americano Coffee
                </span>
              </p>
            </div>
            <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
              <FaEye className="bg-[#D2B48C] p-2 rounded-md" />
              <FaPen className="bg-[#3C393B] p-2 rounded-md" />
              <MdDelete className="bg-[#EA4744] p-2 rounded-md" />
            </div>
          </div>
          {/* will be deleted */}
          <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
            <img
              className="md:max-w-48 md:max-h-60"
              src={coffeeImg}
              alt="coffee mug img"
            />
            <div className="space-y-4 my-auto">
              <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
                Chef:{" "}
                <span className="text-[#5C5B5B] font-normal">Mr. John Doe</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold">
                Price:{" "}
                <span className="text-[#5C5B5B] font-normal">890 Taka</span>
              </p>
              <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
                Name:{" "}
                <span className="text-[#5C5B5B] font-normal">
                  Americano Coffee
                </span>
              </p>
            </div>
            <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
              <FaEye className="bg-[#D2B48C] p-2 rounded-md" />
              <FaPen className="bg-[#3C393B] p-2 rounded-md" />
              <MdDelete className="bg-[#EA4744] p-2 rounded-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

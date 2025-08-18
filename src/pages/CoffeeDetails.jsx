import { Link, useLoaderData } from "react-router-dom";
import bgImg from "../assets/more/11.png";

const CoffeeDetails = () => {
  const loadedData = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } = loadedData;

  return (
    <div
      className="bg-cover bg-center py-12 "
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Back Button */}
      <div className="mb-10 md:mb-20 max-w-10/12 md:max-w-9/12 mx-auto">
        <Link
          to="/"
          className="flex font-rancho items-center gap-2 text-3xl font-semibold text-[#374151] hover:text-gray-900"
        >
          ← Back to home
        </Link>
      </div>

      {/* Coffee Details Card */}
      <div className="max-w-10/12 md:max-w-9/12 mx-auto bg-[#F4F3F0] bg-opacity-90  rounded-md p-5 md:p-20 flex flex-col lg:flex-row items-center gap-8">
        {/* Coffee Image */}
        <div className="flex-shrink-0">
          <img src={photo} alt={name} className="object-cover" />
        </div>

        {/* Coffee Info */}
        <div className="flex-1 text-left">
          <h2 className="font-rancho text-3xl text-[#331A15] mb-4">Niceties</h2>
          <p className="text-xl mb-2">
            <span className="font-bold">Name:</span> {name}
          </p>
          <p className="text-xl mb-2">
            <span className="font-bold">Chef:</span> {chef}
          </p>
          <p className="text-xl mb-2">
            <span className="font-bold">Supplier:</span> {supplier}
          </p>
          <p className="text-xl mb-2">
            <span className="font-bold">Taste:</span> {taste}
          </p>
          <p className="text-xl mb-2">
            <span className="font-bold">Category:</span> {category}
          </p>
          <p className="text-xl">
            <span className="font-bold">Details:</span> {details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;

import { FaEye, FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, onDelete }) => {
  const { _id, photo, name, price, chef } = coffee;
  return (
    <div className="p-8 bg-[#F5F4F1] md:flex gap-3 justify-between rounded-md">
      <img className="md:max-w-48 md:max-h-60" src={photo} alt={name} />
      <div className="space-y-4 my-auto">
        <p className="text-[#1B1A1A] text-xl font-bold mt-2 sm:mt-0">
          Chef: <span className="text-[#5C5B5B] font-normal">{chef}</span>
        </p>
        <p className="text-[#1B1A1A] text-xl font-bold">
          Price:{" "}
          <span className="text-[#5C5B5B] font-normal">{price} Taka</span>
        </p>
        <p className="text-[#1B1A1A] text-xl font-bold mb-2 sm:mb-0">
          Name: <span className="text-[#5C5B5B] font-normal">{name}</span>
        </p>
      </div>
      <div className="text-4xl flex sm:flex-col space-y-4 text-white my-auto gap-3 sm:gap-0">
        <Link to={`coffee-details/${_id}`}>
          <FaEye className="bg-[#D2B48C] p-2 rounded-md cursor-pointer" />
        </Link>
        <Link to={`update-coffee/${_id}`}>
          <FaPen className="bg-[#3C393B] p-2 rounded-md cursor-pointer" />
        </Link>
        <MdDelete
          onClick={() => onDelete(_id)}
          className="bg-[#EA4744] p-2 rounded-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Coffee;

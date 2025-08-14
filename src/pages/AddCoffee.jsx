import { Link } from "react-router-dom";
import bgImg from "../assets/more/11.png";
import { useState } from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const [formData, setFormDate] = useState({
    name: "",
    chef: "",
    supplier: "",
    taste: "",
    price: "",
    category: "",
    details: "",
    photo: "",
  });

  const handleChange = (e) => {
    setFormDate({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            showConfirmButton: false,
            timer: 1200,
          });
          // reset form
          setFormDate({
            name: "",
            chef: "",
            supplier: "",
            taste: "",
            price: "",
            category: "",
            details: "",
            photo: "",
          });
        }
      });
  };

  return (
    <div
      className="bg-cover bg-center py-12"
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
      <div className="max-w-10/12 md:max-w-9/12 mx-auto bg-[#f8f6f3] p-6 lg:py-[70px] lg:px-[120px] rounded-md">
        {/* Title */}
        <h4 className="text-5xl font-bold text-center mb-2 text-[#374151]">
          Add New Coffee
        </h4>
        <p className="text-center text-[#1B1A1AB2] text-sm md:text-lg max-w-2xl mx-auto mb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Enter coffee name"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                onChange={handleChange}
                value={formData.chef}
                placeholder="Enter coffee chef"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                onChange={handleChange}
                value={formData.supplier}
                placeholder="Enter coffee supplier"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                onChange={handleChange}
                value={formData.taste}
                placeholder="Enter coffee taste"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Category
              </label>
              <input
                type="text"
                name="category"
                onChange={handleChange}
                value={formData.category}
                placeholder="Enter coffee category"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Price */}
            <div>
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Price
              </label>
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={formData.price}
                placeholder="Enter coffee price"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>

            {/* Details */}
            <div className="md:col-span-2">
              <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
                Details
              </label>
              <input
                type="text"
                name="details"
                onChange={handleChange}
                value={formData.details}
                placeholder="Enter coffee details"
                className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
              />
            </div>
          </div>

          {/* Photo */}
          <div className="mt-4">
            <label className="block text-xl text-[#1B1A1ACC] font-semibold mb-4">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              onChange={handleChange}
              value={formData.photo}
              placeholder="Enter photo URL"
              className="w-full border rounded px-3 py-3 text-sm focus:outline-none focus:ring focus:ring-yellow-300"
            />
          </div>

          {/* Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-2xl font-rancho text-[#331A15] py-3 rounded hover:bg-[#c19a6b] transition"
            >
              Add Coffee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;

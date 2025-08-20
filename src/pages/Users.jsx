import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const Users = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);

  function handleDelete(_id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://espresso-emporium-server-bice.vercel.app/users/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
                showConfirmButton: false,
                timer: 1200,
              });
              const remaining = users.filter((coffee) => coffee._id !== _id);
              setUsers(remaining);
            }
          });
      }
    });
  }

  return (
    <div className="max-w-10/12 md:max-w-9/12 mx-auto px-4 py-8">
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-[#331A15] my-6">
        All Users ({users.length})
      </h1>

      {/* Responsive Table */}
      <div className="overflow-x-auto shadow-lg rounded-lg border border-[#D2B48C]">
        <table className="min-w-full bg-white">
          {/* Table Head */}
          <thead className="bg-[#331A15] text-white font-rancho">
            <tr>
              <th className="px-6 py-3 text-left text-sm md:text-xl font-semibold">
                Photo
              </th>
              <th className="px-6 py-3 text-left text-sm md:text-xl font-semibold">
                Name
              </th>
              <th className="px-6 py-3 text-left text-sm md:text-xl font-semibold">
                Email
              </th>
              <th className="px-6 py-3 text-left text-sm md:text-xl font-semibold">
                Created At
              </th>
              <th className="px-6 py-3 text-center text-sm md:text-base font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-[#D2B48C] hover:bg-[#D2B48C]/10 transition"
              >
                {/* Photo */}
                <td className="px-6 py-4">
                  <img
                    src={user.photo}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover border border-[#D2B48C]"
                  />
                </td>

                {/* Name */}
                <td className="px-6 py-4 text-[#331A15] font-medium">
                  {user.name}
                </td>

                {/* Email */}
                <td className="px-6 py-4 text-[#5C5B5B]">{user.email}</td>

                {/* Created At */}
                <td className="px-6 py-4 text-[#5C5B5B]">
                  {new Date(Number(user.createdAt)).toLocaleDateString()}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 flex justify-center gap-3">
                  <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#D2B48C] text-[#331A15] hover:bg-[#331A15] hover:text-white transition">
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="flex items-center gap-1 px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;

import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import ShowCase from "../components/ShowCase";
import Swal from "sweetalert2";
import { useState } from "react";

const Home = () => {
  const loadedData = useLoaderData();
  const [coffees, setCoffees] = useState(loadedData);

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
        fetch(`http://localhost:3000/coffees/${_id}`, {
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
              const remaining = coffees.filter((coffee) => coffee._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  }

  return (
    <div>
      <Banner />
      <section className="bg-[#ECEAE3]">
        <ShowCase />
      </section>
      <Products coffees={coffees} onDelete={handleDelete} />
      <Gallery />
    </div>
  );
};

export default Home;

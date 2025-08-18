import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Products from "../components/Products";
import ShowCase from "../components/ShowCase";
import Swal from "sweetalert2";

const Home = () => {
  const loadedData = useLoaderData();

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
      <Products coffees={loadedData} onDelete={handleDelete} />
      <Gallery />
    </div>
  );
};

export default Home;

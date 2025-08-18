import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  return (
    <div>
      <h1>Update coffee page</h1>
    </div>
  );
};

export default UpdateCoffee;

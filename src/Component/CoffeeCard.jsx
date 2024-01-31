// import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, supplier, taste, category, img } = coffee || {};
  // const [color, setColor] = useState("");

  // const handleChange = () => {
  //   let useColor = color === "" ? "blue" : "";
  //   setColor(useColor);
  // };

  const handleDelete = (id) => {
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
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof.id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 my-4 mx-4 shadow-xl">
      <figure>
        <img className="w-48 h-40 object-cover" src={img} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full p-4 ">
        <div
          // style={{ backgroundColor: color }}
          className="my-6"
        >
          <h2 className="card-title">Name: {name}</h2>
          <p>Chef:{chef}</p>
          <p>Supplier:{supplier}</p>
          <p>Category:{category}</p>
          <p>Taste:{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical gap-4 space-y-4">
            <button className="btn text-white  bg-blue-500 hover:bg-blue-700">
              View
            </button>
            <button
              // onClick={handleChange}
              className="btn bg-green-400 hover:bg-green-700 text-white"
            >
              <Link to={`updateCoffee/${_id}`}> Edit</Link>
            </button>
            <button
              onClick={() => handleDelete(_id)}
              className=" text-white btn text-2xl hover:bg-red-700 bg-red-600"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

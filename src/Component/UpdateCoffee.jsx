import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const getSpecificData = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, img } =
    getSpecificData || {};
  const navigate = useNavigate();
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const img = form.img.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      img,
    };

    // Send data to the server
    fetch(`https://coffee-store-server-eight-psi.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        navigate("/");
      });
  };
  return (
    <div className="bg-[#F4F3F0] my-24 p-24 max-w-[1320px] mx-auto">
      {/* header */}
      <div>
        <div className="flex justify-center items-center gap-3">
          {" "}
          <h3 className="text-5xl text-center font-extrabold font-rancho">
            Update Coffee: {name}
          </h3>
          <img
            className="w-16"
            src="https://i.ibb.co/56Xwkx5/coffee.png"
            alt=""
          />
        </div>
      </div>
      {/* form */}
      <form onSubmit={handleUpdateCoffee}>
        <div>
          {" "}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Coffee name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Chef</span>
              </label>
              <label className="input-group">
                <input
                  defaultValue={chef}
                  type="text"
                  name="chef"
                  placeholder="Coffee Chef name"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div className="md:flex">
            {/* card-1 */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Supplier</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  placeholder="Supplier-Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* card-2 */}
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  placeholder="Taste"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          <div className="md:flex">
            {/* card-1 */}
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <select
                  name="category"
                  className="w-full p-3 rounded-lg outline-none"
                  defaultValue={category}
                  id=""
                >
                  <option value="select">Select an option</option>
                  <option value="mild">Mild and Mellow</option>
                  <option value="cappuccino">Cappuccino</option>
                  <option value="espresso">Espresso Elegance</option>
                  <option value="mocha">Mocha</option>
                  <option value="latte">Latte</option>
                </select>
              </label>
            </div>

            {/* card-2 */}
            <div className="form-control w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  placeholder="Enter Coffee details"
                  className="input input-bordered w-full "
                />
              </label>
            </div>
          </div>
          {/* IMAGE */}
          <div className="form-control w-full md:flex">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <label className="input-group">
              <input
                type="url"
                name="img"
                defaultValue={img}
                placeholder="Enter photo-URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        {/* Submit button */}
        <input
          type="submit"
          value="Update Coffee"
          className="mt-4 btn btn-block text-white hover:bg-yellow-800 bg-yellow-900"
        />
      </form>
    </div>
  );
};

export default UpdateCoffee;

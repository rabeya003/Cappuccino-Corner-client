import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const img = form.img.value;
    const newCoffee = { name, chef, supplier, taste, category, details, img };

    // Send data to the server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Coffee added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        e.target.reset();
      });
  };

  return (
    <div className="bg-[#F4F3F0] my-24 p-24 max-w-[1320px] mx-auto">
      {/* header */}
      <div>
        <div className="flex justify-center items-center gap-3">
          {" "}
          <h3 className="text-5xl text-center font-extrabold font-rancho">
            Add New Coffee
          </h3>
          <img
            className="w-16"
            src="https://i.ibb.co/56Xwkx5/coffee.png"
            alt=""
          />
        </div>
        <p className="text-center m-6">
          It is a well-established truth that a reader will be distracted from a
          page&rsquo;s layout by its <br></br> readable content. The reason for
          using Lorem Ipsum instead of Content is that the <br></br>former has a
          more or less normal distribution of letters.
        </p>
      </div>
      {/* form */}
      <form onSubmit={handleAddCoffee}>
        <div>
          {" "}
          <div className="md:flex">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  required
                  autoComplete="off"
                  type="text"
                  name="name"
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
                placeholder="Enter photo-URL"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>

        {/* Submit button */}
        <input
          type="submit"
          value="Add Coffee"
          className="mt-4 btn btn-block text-white hover:bg-yellow-800 bg-yellow-900"
        />
      </form>
    </div>
  );
};

export default AddCoffee;

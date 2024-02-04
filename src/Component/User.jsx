import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const User = () => {
  const users = useLoaderData();
  const [Users, setUsers] = useState(users);

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
        fetch(`http://localhost:5000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remaining = Users.filter((u) => u._id !== id);
              setUsers(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Email</th>
              <th>Created-Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Users.map((user) => (
              <tr key={user._id}>
                <th>1</th>
                <td>{user._id}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button
                    className="bg-red-700 hover:bg-red-800 py-2 px-2 text-white"
                    onClick={() => handleDelete(user._id)}
                  >
                    X
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

export default User;

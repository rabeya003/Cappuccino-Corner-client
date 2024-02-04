import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="text-red-800">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/addCoffee">Add-Coffee</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
};

export default Header;

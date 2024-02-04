import { useLoaderData } from "react-router-dom";
// import "./App.css";

import { useState } from "react";
import CoffeeCard from "./CoffeeCard";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);
  return (
    <div className="m-20">
      {/* <Header></Header> */}
      <h1 className="text-6xl my-20 text-center text-purple-700">
        Hot Cold Coffee {coffees.length}
      </h1>

      <div className="grid md:grid-cols-2">
        {" "}
        {coffees?.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;

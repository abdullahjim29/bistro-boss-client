import { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";

const Desserts = () => {
  const [dessertMenues, setDessertMenues] = useState([]);
  useEffect(() => {
    fetch("/menues.json")
      .then((res) => res.json())
      .then((data) =>
        setDessertMenues(data.filter((menu) => menu.category === "dessert"))
      );
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {dessertMenues.map((menu) => (
        <FoodCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default Desserts;

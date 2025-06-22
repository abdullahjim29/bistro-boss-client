import FoodCard from "../../components/FoodCard";
import useMenu from "../../hooks/useMenu";

const Desserts = () => {
  const menues = useMenu() || [];
  const dessertMenues = menues.filter((menu) => menu.category === "dessert");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {dessertMenues.map((menu) => (
        <FoodCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default Desserts;

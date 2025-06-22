import FoodCard from "../../components/FoodCard";
import useMenu from "../../hooks/useMenu";

const Drinks = () => {
  const menues = useMenu() || [];
  const drinksMenues = menues.filter((menu) => menu.category === "drinks");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {drinksMenues.map((menu) => (
        <FoodCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default Drinks;

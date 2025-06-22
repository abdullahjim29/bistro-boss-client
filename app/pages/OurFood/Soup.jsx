import FoodCard from "../../components/FoodCard";
import useMenu from "../../hooks/useMenu";

const Soup = () => {
  const menues = useMenu() || [];
  const soupMenues = menues.filter((menu) => menu.category === "soup");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {soupMenues.map((menu) => (
        <FoodCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default Soup;

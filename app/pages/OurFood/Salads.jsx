import FoodCard from "../../components/FoodCard";
import useMenu from "../../hooks/useMenu";

const Salads = () => {
  const menues = useMenu() || [];
  const saladMenues = menues.filter((menu) => menu.category === "salad");

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {saladMenues.map((menu) => (
        <FoodCard key={menu._id} menu={menu} />
      ))}
    </div>
  );
};

export default Salads;

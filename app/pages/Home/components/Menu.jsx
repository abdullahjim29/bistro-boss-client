import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import MenuCard from "../../../components/MenuCard";

const Menu = () => {
  const [menues, setMenues] = useState([]);
  useEffect(() => {
    fetch("menues.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredMenus = data.filter(menu => menu.category === 'popular');
        setMenues(filteredMenus)
      });
  }, []);

  return (
    <div className="my-20 w-11/12 md:max-w-5xl mx-auto">
      <SectionTitle
        subHeading={"---Check it out---"}
        heading={"FROM OUR MENU"}
      />

      <div className="grid md:grid-cols-2 gap-x-5 gap-y-10">
        {menues.map((menu) => (
          <MenuCard key={menu._id} menu={menu} />
        ))}
      </div>
      <div className="flex flex-col items-center mt-12">
        <button className="border-b-2 rounded-lg py-2 border-[1f2937] px-4 text-[#1F2937] uppercase hover:bg-[#BB8506] hover:text-white">View Full Menu</button>
      </div>
    </div>
  );
};

export default Menu;

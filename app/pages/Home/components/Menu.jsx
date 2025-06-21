import { useEffect, useState } from "react";
import MenuCard from "../../../components/MenuCard";
import SectionTitle from "../../../components/SectionTitle";

const Menu = () => {
  const [menues, setMenues] = useState([]);
  useEffect(() => {
    fetch("menues.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredMenus = data.filter(
          (menu) => menu.category === "popular"
        );
        setMenues(filteredMenus);
      });
  }, []);

  return (
    <div className="my-20 w-11/12 md:max-w-5xl mx-auto">
      <SectionTitle subHeading={`---Check it out---`} heading={`FROM OUR MENU`}/>
      <MenuCard menues={menues} buttonText={'View Full  Menu'}/>
    </div>
  );
};

export default Menu;


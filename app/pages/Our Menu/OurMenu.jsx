import Cover from "../../components/Shared/Cover";
import { useEffect, useState } from "react";
import MenuCard from "../../components/MenuCard";
import SectionTitle from "../../components/SectionTitle";

// images
import menuBannerImg from "../../../public/assets/menu/banner3.jpg";
import dessertsImg from "../../../public/assets/menu/dessert-bg.jpeg"
import pizzaImg from "../../../public/assets/menu/pizza-bg.jpg"
import saladImg from "../../../public/assets/menu/salad-bg.jpg"
import soupImg from "../../../public/assets/menu/soup-bg.jpg"

const OurMenu = () => {
  const [menues, setMenues] = useState([]);
  useEffect(() => {
    fetch("menues.json")
      .then((res) => res.json())
      .then((data) => {
        setMenues(data);
      });
  }, []);

  const popularedMenus = menues.filter((menu) => menu.category === "popular");
  const offeredMenus = menues.filter((menu) => menu.category === "offered");
  const dessertMenus = menues.filter((menu) => menu.category === "dessert");
  const pizzaMenus = menues.filter((menu) => menu.category === "pizza");
  const saladMenus = menues.filter((menu) => menu.category === "salad");
  const soupMenus = menues.filter((menu) => menu.category === "soup");
  const drinkMenus = menues.filter((menu) => menu.category === "drinks");

  return (
    <div>
      {/* banner */}
      <Cover
        img={menuBannerImg}
        title={"OUR MENU"}
        description={"Would you like to try a dish?"}
      />

      {/* offered menu */}
      <section>
        <SectionTitle subHeading={`---Don't miss---`} heading={`TODAY'S OFFER`}/>
        <MenuCard menues={offeredMenus} buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
      </section>

      {/* desserts menu */}
      <section>
        <MenuCard menues={dessertMenus} img={dessertsImg} title={'DESSERTS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
      </section>

      {/* pizza menu */}
      <section>
        <MenuCard menues={pizzaMenus} img={pizzaImg} title={'PIZZA'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
      </section>

      {/* salad menu */}
      <section>
        <MenuCard menues={saladMenus} img={saladImg} title={'SALADS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
      </section>

      {/* soup menu */}
      <section>
        <MenuCard menues={soupMenus} img={soupImg} title={'SOUPS'} description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} buttonText={'ORDER YOUR FAVOURITE FOOD'}/>
      </section>

    </div>
  );
};

export default OurMenu;

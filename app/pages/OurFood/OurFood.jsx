import Cover from "../../components/Shared/Cover";
import ourFoodBannerImg from "../../../public/assets/shop/banner2.jpg";
import { Link, Outlet, useLocation } from "react-router";
import { useEffect, useState } from "react";

const OurFood = () => {
  const [menues, setMenues] = useState([]);
  useEffect(() => {
    fetch("/menues.json")
      .then((res) => res.json())
      .then((data) => setMenues(data));
  }, []);

  const menuCategories = menues
    .map((menuCategory) => menuCategory.category)
    .filter((category) => category !== "popular" && category !== "offered");

  let allCategories = [];
  for (const category of menuCategories) {
    if (!allCategories.includes(category)) {
      allCategories.push(category);
    }
  }

  const { pathname } = useLocation();
  return (
    <div>
      <Cover
        img={ourFoodBannerImg}
        title={"OUR FOOD"}
        description={"Would you like to try a dish?"}
      />

      <div className="w-9/12 mx-auto p-10 mb-30 space-y-5">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-14 md:gap-x-5 justify-center">
          {allCategories.map((category, index) => (
            <Link to={`/our-food/${category}`} key={index}>
              <p
                className={`uppercase ${
                  pathname === `/our-food/${category}`
                    ? "text-[#BB8506] font-semibold border-b-2 inline-block"
                    : "font-medium"
                }`}
              >
                {category}
              </p>
            </Link>
          ))}
        </div>
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default OurFood;

import Cover from "../../components/Shared/Cover";
import ourFoodBannerImg from "../../../public/assets/shop/banner2.jpg"

const OurFood = () => {
    return (
        <div>
            <Cover img={ourFoodBannerImg} title={'OUR SHOP'} description={'Would you like to try a dish?'}/>
        </div>
    );
};

export default OurFood;
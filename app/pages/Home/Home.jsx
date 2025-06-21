import Banner from "./components/Banner";
import CallUs from "./components/CallUs";
import Category from "./components/Category";
import ChefService from "./components/ChefService";
import FeaturedMenu from "./components/FeaturedMenu";
import Menu from "./components/Menu";
import Recommends from "./components/Recommends";
import Testimonials from "./components/Testimonials";

const Home = () => {
    return (
        <div>
            {/* banner*/}
            <Banner/>

            {/* Category */}
            <Category/>

            {/* chef service */}
            <ChefService/>

            {/* our menu */}
            <Menu/>

            {/* call us */}
            <CallUs/>

            {/* ceaf recommends */}
            <Recommends/>

            {/* featured menu */}
            <FeaturedMenu/>

            {/* testimonials */}
            <Testimonials/>

        </div>
    );
};

export default Home;
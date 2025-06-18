import Banner from "./components/Banner";
import CallUs from "./components/CallUs";
import Category from "./components/Category";
import ChefService from "./components/ChefService";
import Menu from "./components/Menu";

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

        </div>
    );
};

export default Home;
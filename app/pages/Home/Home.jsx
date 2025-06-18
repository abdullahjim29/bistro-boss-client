import Banner from "./components/Banner";
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

        </div>
    );
};

export default Home;
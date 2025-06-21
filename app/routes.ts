import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout/MainLayout.jsx", [
        route("/", "./pages/Home/Home.jsx"),
        route("/contact-us", "./pages/ContactUs/ContactUs.jsx"),
        route("/dashboard", "./pages/Dashboard/Dashboard.jsx"),
        route("/our-menu", "./pages/Our Menu/OurMenu.jsx"),
        route("/our-food", "./pages/OurFood/OurFood.jsx", [
            // route("salad","./pages/OurFood/Salads.jsx"),
            route("salad", "./pages/OurFood/Salads.jsx"),
            route("dessert", "./pages/OurFood/Desserts.jsx"),
            route("drinks", "./pages/OurFood/Drinks.jsx"),
            route("pizza", "./pages/OurFood/Pizza.jsx"),
            route("soup", "./pages/OurFood/Soup.jsx"),
        ]),
        
    ]),


] satisfies RouteConfig;
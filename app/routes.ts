import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    layout("./layouts/MainLayout/MainLayout.jsx", [
        route("/", "./pages/Home/Home.jsx"),
        route("/contact-us", "./pages/ContactUs/ContactUs.jsx"),
        route("/dashboard", "./pages/Dashboard/Dashboard.jsx"),
        route("/our-menu", "./pages/Our Menu/OurMenu.jsx"),
        route("/our-shop", "./pages/Our Shop/OurShop.jsx"),
    ]),

] satisfies RouteConfig;

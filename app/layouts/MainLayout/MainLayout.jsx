import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="container mx-auto">
      {/* navbar */}
      <NavBar />

      {/* outlet */}
      <Outlet />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

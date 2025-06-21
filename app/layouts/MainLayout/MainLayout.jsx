import { Outlet } from "react-router";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* navbar */}
      <NavBar />

      <main className="flex-grow">
        {/* outlet */}
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;

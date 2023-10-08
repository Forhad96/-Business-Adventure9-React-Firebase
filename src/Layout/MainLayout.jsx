import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-200px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    );
};

export default MainLayout;
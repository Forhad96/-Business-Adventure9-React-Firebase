import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar";
import Footer from "../Components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MainLayout = () => {
  const {loading} =useContext(AuthContext)
  if(loading){
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200" />
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
        </div>
      </div>
    );
  }
    return (
      <div className="bg-[#0A4D68]">
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
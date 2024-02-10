import React from "react";
import { Outlet } from "react-router-dom";
import { Link} from "react-router-dom";
import Footer from "./Footer";
import logo1 from "../assets/logo1.jpg";



const Layout = () => {
  return (
    <div className="">
      <nav className=" relative z-10 container mx-auto flex gap-4 h-8 justify-between  items-center py-6 pb-6 mb-8">
        <Link className="mr-32" to="/">
          <img className="w-8 h-8" src={logo1} alt="logo" />
        </Link>
        <div className="md:flex gap-2 items-center xs:hidden sm:hidden md:block">
          {" "}
          <Link
            className="w-32 hover:text-green-90 hover:font-semibold"
            to="something"
          >
            Something
          </Link>
        </div>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

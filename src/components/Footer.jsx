import React from "react";
import logo from "../assets/logo1.jpg";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

const Footer = () => {
  return (
    <footer className=" bg-gray-99  mt-8 text-[#ffffff]">
      <div className="container mx-auto px-1 py-4 sm:flex flex-wrap items-center  md:flex-nowrap  justify-between">
        <div className="">
          <Link className="mr-48" to="/">
            <img className="w-8 h-8" src={logo} alt="" />
          </Link>
          <ul>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </li>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              velit?
            </li>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Ability to add your own video with api
            </li>
            <li>
              {" "}
              <IoMdCheckmark className="text-green-20 size-5" />
              Convenient and easy to use
            </li>
          </ul>
        </div>

        <div className="w-2/5">
          <h3>Subscribe to our Newsletter</h3>
          <p className="mb-4">
            Subscribe up to our newsletter. Be in touch with latest news and
            special offers, etc.
          </p>
          <form action="submit">
            <input
              className="mb-4 px-4 py-1 bg-gray-100 border-b-2 focus:outline-none"
              type="text"
              placeholder="Enter your email address"
            />

            <button
              className="block px-20 py-2 border-2 border-green-20 bg-green-20 text-white hover:text-green-20 hover:bg-white"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

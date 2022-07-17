import {
  SearchIcon,
  MenuAlt4Icon,
  ChevronDownIcon,
  XIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Logoimg from "../assets/logomark.min.svg";
import Logotype from "../assets/logotype.min.svg";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const clickHandler = () => {
    setNav(!nav);
  };

  return (
    <nav className=" relative flex justify-between max-w-7xl m-auto ">
      <div className="flex  mx-5 my-4 ">
        <img src={Logoimg} alt="logo" className="w-15" />
        <img src={Logotype} alt="logo" className="w-15 mx-6" />
      </div>
      <ul className="hidden lg:flex items-center text-laragrey lg:gap-6 xl:gap-10">
        <li>Forge</li>
        <li>Vapor</li>
        <li className="flex items-center">
          Ecosystem <ChevronDownIcon className="w-7 ml-2" />
        </li>
        <li>News</li>
        <li>Partners</li>
      </ul>

      <div className="flex mx-7 text-laragrey items-center">
        <SearchIcon className="w-7 mr-3" />
        {!nav ? (
          <MenuAlt4Icon
            onClick={clickHandler}
            className="w-7 lg:hidden cursor-pointer "
          />
        ) : (
          <XIcon
            onClick={clickHandler}
            className="w-7 lg:hidden cursor-pointer "
          />
        )}

        <Button
          text="DOCUMENTATION"
          className="hidden lg:inline-block h-9 mb-0"
        />
      </div>
      <div
        className={
          !nav
            ? "hidden"
            : "absolute h-screen mt-20 mx-5 text-laragrey bg-white w-screen"
        }
      >
        <ul>
          <li className="mt-6">
            <a href="https://forge.laravel.com/">Forge</a>
          </li>
          <li className="mt-6">
            <a href="https://vapor.laravel.com/">Vapor</a>
          </li>
          <li className="mt-6">
            <a href="https://laravel-news.com/">News</a>
          </li>
          <li className="mt-6">
            <a href="https://partners.laravel.com/">Partners</a>
          </li>
          <li className="mt-6">
            <Button
              text="DOCUMENTATION"
              className="block mb-0 m-auto w-5/6 sm:w-2/4 text-center"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

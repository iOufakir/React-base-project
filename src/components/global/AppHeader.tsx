import logo from "assets/logo.png";
import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

const AppHeader = () => {
  return (
    <header
      className=" mx-auto py-5 px-6 columns-2 flex items-center justify-between 
    "
    >
      <div className="">
        <Link to="/">
          <img
            src={logo}
            className="logo w-36 shadow-inner  bg-gradient-to-r from-sky-500 to-indigo-500 rounded-lg px-4 py-2"
            alt="logo"
          />
        </Link>
      </div>

      <ul className="flex flex-col lg:flex-row lg:space-x-8 text-black">
        <HeaderLink text="Home" path="/" />
        <HeaderLink text="About" path="/about" />
      </ul>
    </header>
  );
};

export default AppHeader;

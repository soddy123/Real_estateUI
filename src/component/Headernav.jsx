import { useState } from "react";
import { MenuButton } from "./menu/Menu"; // Assuming this is your custom button component
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and Close icon from Font Awesome

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed bg-bg_color z-10 w-full flex items-center justify-between py-6 px-10 border-b border-gray-300">
      {/* Logo */}
      <div className="text-2xl font-bold">Logo</div>

      {/* Desktop Navigation (Hidden on smaller screens) */}
      <ul className="hidden lg:flex  items-center gap-40 text-md font-bold [&>*]:cursor-pointer">
        <li><MenuButton>Location</MenuButton></li>
        <li><MenuButton>About</MenuButton></li>
        <li><MenuButton>Contact</MenuButton></li>
      </ul>

      {/* Sign-Up Button & Mobile Menu Button */}
      <div className="flex items-center gap-4">
        {/* Sign-Up Button (Visible on medium and larger screens, now to the left of the Menu button) */}
        <button className="hidden md:block font-bold border border-gray-300 py-3 px-8 rounded-full">
          <MenuButton>Sign Up</MenuButton>
        </button>

        {/* Mobile Menu Button (Visible on small screens) */}
        <div className="md:flex lg:hidden">
          <button
            className="text-3xl"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />} {/* Toggle between Hamburger and Close icons */}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (Slide in from the right) */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-bg_color z-20 transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu icon at the top of the sliding menu */}
        <div className="flex justify-end p-6">
          <button
            className="text-3xl"
            onClick={toggleMenu}
            aria-label="Close Menu"
          >
            <FaTimes /> {/* Close icon */}
          </button>
        </div>

        {/* Mobile Menu Items */}
        <ul className="flex flex-col items-center gap-6 text-md font-medium py-6 mt-4">
          <li><MenuButton>Location</MenuButton></li>
          <li><MenuButton>About</MenuButton></li>
          <li><MenuButton>Contact</MenuButton></li>

          {/* Sign-Up Button (Visible inside mobile menu for screens less than md) */}
          <li>
            <button className="md:hidden font-bold border border-gray-300 py-3 px-8 rounded-full">
              <MenuButton>Sign Up</MenuButton>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

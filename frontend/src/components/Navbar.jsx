import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-emerald-700"
        >
          Toplipton Bank
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <Link to="/about" className="hover:text-emerald-700">
            About
          </Link>
          <Link to="/services" className="hover:text-emerald-700">
            Services
          </Link>
          <Link to="/contact" className="hover:text-emerald-700">
            Contact
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            to="/login"
            className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">
          <Link
            to="/about"
            className="block text-gray-700"
            onClick={() => setOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            className="block text-gray-700"
            onClick={() => setOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="block text-gray-700"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/login"
            className="block bg-emerald-600 text-white text-center py-2 rounded-lg"
            onClick={() => setOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

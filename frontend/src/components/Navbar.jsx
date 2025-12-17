import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-emerald-700">Toplipton Bank</h1>

        {/* Nav links */}
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

        {/* CTA */}
        <Link
          to="/login"
          className="bg-emerald-600 text-white px-5 py-2 rounded-lg hover:bg-emerald-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

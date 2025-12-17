import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <aside className="w-64 bg-white border-r min-h-screen p-6">
      <Link to="/" className="text-2xl font-bold text-green-600 mb-10 block">
        Toplipton Bank
      </Link>

      <nav className="space-y-4">
        <Link
          to="/dashboard"
          className="block text-gray-700 hover:text-green-600 cursor-pointer"
        >
          Overview
        </Link>

        <Link
          to="/dashboard"
          className="block text-gray-700 hover:text-green-600 cursor-pointer"
        >
          Accounts
        </Link>

        <Link
          to="/transactions"
          className="block text-gray-700 hover:text-green-600 cursor-pointer"
        >
          Transactions
        </Link>

        <Link
          to="/dashboard"
          className="block text-green-600 font-medium cursor-pointer"
        >
          Profile
        </Link>
      </nav>

      {/* Logout styled like link */}
      <button
        onClick={handleLogout}
        className="mt-10 block text-red-600 hover:text-red-700 hover:underline cursor-pointer bg-transparent border-none p-0 text-left"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;

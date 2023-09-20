import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between shadow-md bg-gray-300 py-5 px-6">
        <h2 className="text-3xl font-semibold">Programming Hero</h2>
        <ul>
          <Link className="ml-8 text-lg font-semibold" to="/">
            Home
          </Link>
          <Link className="ml-8 text-lg font-semibold" to="/product">
            Product
          </Link>
          <Link className="ml-8 text-lg font-semibold" to="/about">
            About
          </Link>
          <Link className="ml-8 text-lg font-semibold" to="/dashboard">
            Dashboard
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

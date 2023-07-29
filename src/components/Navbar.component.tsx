import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between p-4">
        <NavLink className="text-2xl font-semibold" to="/">
          BookStore
        </NavLink>

        <ul className="font-medium flex rounded-lg gap-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "p-2 text-white bg-blue-900 rounded"
                  : "p-2 text-blue-900 rounded"
              }
              to="/login"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;

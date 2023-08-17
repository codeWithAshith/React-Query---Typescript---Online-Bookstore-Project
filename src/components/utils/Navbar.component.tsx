import { NavLink, useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";
import { PAGES } from "../../constants";
import { useAppContext } from "../../context/App.context";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { cart } = useAppContext();

  return (
    <nav className="bg-white border-b-2 border-slate-200">
      <div className="flex items-center justify-between p-4">
        <NavLink className="text-2xl font-light tracking-widest" to="/">
          BookStore
        </NavLink>

        <ul className="font-medium flex items-center rounded-lg gap-2">
          {PAGES.map((page) => {
            return (
              <li key={page.label}>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "p-2 px-6 text-white bg-slate-900 rounded-3xl"
                      : "p-2 px-6 text-slate-900 hover:cursor-pointer hover:bg-slate-100 rounded-3xl"
                  }
                  to={page.path}
                >
                  {page.label === "Cart" && cart.length > 0
                    ? `${page.label} (${cart.length})`
                    : page.label}
                </NavLink>
              </li>
            );
          })}
          <li>
            <div
              className="p-2 px-4 text-slate-900 hover:cursor-pointer hover:bg-slate-100 rounded-3xl"
              onClick={() => {
                navigate("/login");
              }}
            >
              <LuLogOut />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;

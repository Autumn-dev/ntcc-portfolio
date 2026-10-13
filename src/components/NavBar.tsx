import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-40 hidden md:block bg-black border-b-4 border-double border-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-5/6 items-center justify-between py-3 font-bold text-white"
      >
        <NavLink to="/" className="text-xl tracking-widest uppercase">
          Nathan Cheung
        </NavLink>

        <ul className="flex gap-2">
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `group flex items-center gap-2 px-3 py-1 uppercase border-4 border-double ${
                    isActive
                      ? "border-white text-yellow-300"
                      : "border-transparent hover:bg-gray-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      aria-hidden="true"
                      className={
                        isActive
                          ? "animate-pulse"
                          : "invisible group-hover:visible"
                      }
                    >
                      ▶
                    </span>
                    {label}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default NavBar;

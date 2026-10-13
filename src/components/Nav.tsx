import { Link } from "react-router-dom";

type NavProps = {
  onNavigate?: () => void;
  className?: string;
  id?: string;
};

function Nav({
  onNavigate,
  className = "sketchy-border flex flex-col text-white items-center text-lg w-fit mx-auto mt-10 font-bold divide-dashed divide-white divide-y-3  bg-black",
  id,
}: NavProps) {
  return (
    <nav aria-label="Main navigation" id={id} className={className}>
      <Link
        className="hover:bg-gray-700 px-6 py-1 w-30"
        onClick={onNavigate}
        to="/"
      >
        Home
      </Link>{" "}
      <Link
        className="hover:bg-gray-700 px-2 py-1 w-30"
        onClick={onNavigate}
        to="/projects"
      >
        Projects
      </Link>{" "}
      <Link
        className="hover:bg-gray-700 px-6 py-1 w-30"
        onClick={onNavigate}
        to="/about"
      >
        About
      </Link>{" "}
      <Link
        className="hover:bg-gray-700 px-6 py-1 w-30"
        onClick={onNavigate}
        to="/contact"
      >
        Contact
      </Link>{" "}
    </nav>
  );
}

export default Nav;

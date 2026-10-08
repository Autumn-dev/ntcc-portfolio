import { Link } from 'react-router-dom'

function Nav() {
  return (
      <nav className="flex flex-col text-white items-center text-lg w-fit mx-auto mt-8 font-bold border-double border-white border-4 bg-black">
        <Link className="hover:bg-gray-500 px-2" to="/">Home</Link>{' '}
        <Link className="hover:bg-gray-500 px-2" to="/projects">Projects</Link>{' '}
        <Link className="hover:bg-gray-500 px-2" to="/about">About</Link>{' '}
        <Link className="hover:bg-gray-500 px-2" to="/contact">Contact</Link>{' '}
      </nav>
  );
}

export default Nav
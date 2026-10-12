import { Link } from 'react-router-dom'

function Nav() {
  return (
      <nav className="flex flex-col text-white items-center text-lg w-fit mx-auto mt-10 font-bold border-double divide-solid divide-white divide-y-3 border-white border-4 bg-black">
        <Link className="hover:bg-gray-700 px-6 py-1 w-30" to="/">Home</Link>{' '}
        <Link className="hover:bg-gray-700 px-2 py-1 w-30" to="/projects">Projects</Link>{' '}
        <Link className="hover:bg-gray-700 px-6 py-1 w-30" to="/about">About</Link>{' '}
        <Link className="hover:bg-gray-700 px-6 py-1 w-30" to="/contact">Contact</Link>{' '}
      </nav>
  );
}

export default Nav
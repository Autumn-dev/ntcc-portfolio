import { Link } from 'react-router-dom'

function Nav() {
  return (
      <nav className="flex gap-2 justify-center text-lg font-bold p-2">
        <Link className="hover:bg-sky-700 rounded-lg px-2" to="/">Home</Link>{' '}
        <Link className="hover:bg-sky-700 rounded-lg px-2" to="/projects">Projects</Link>{' '}
        <Link className="hover:bg-sky-700 rounded-lg px-2" to="/about">About</Link>{' '}
        <Link className="hover:bg-sky-700 rounded-lg px-2" to="/contact">Contact</Link>{' '}
      </nav>
  );
}

export default Nav
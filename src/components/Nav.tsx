import { Link } from 'react-router-dom'

function Nav() {
  return (
      <nav className="absolute right-4 top-3 text-lg">
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About</Link> |{' '}
        <Link to="/contact">Contact</Link>
      </nav>
  );
}

export default Nav
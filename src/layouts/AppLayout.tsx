import Nav from '../components/Nav.tsx'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <header className="relative bg-sky-950 text-white p-6 m-5 rounded-lg ">
      <span className="font-bold absolute left-4 top-3 text-2xl">Nathan C</span>
      <Nav />
    </header>
      <Outlet />
    </>
  );
}
export default AppLayout;
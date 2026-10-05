import Nav from '../components/Nav.tsx'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <header className="bg-sky-950 text-white p-4 m-5 rounded-lg ">
      <Nav />
    </header>
      <Outlet />
    </>
  );
}
export default AppLayout;
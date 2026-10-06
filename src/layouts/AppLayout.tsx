import Nav from '../components/Nav.tsx'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <header className="relative text-white rounded-4xl p-2 mx-3 mt-4 bg-sky-950 font-bold text-2xl border-sky-700 border-1">
      <div className="">Nathan Cheung</div>
      <Nav /> 
    </header>
      <Outlet />
    </>
  );
}
export default AppLayout;
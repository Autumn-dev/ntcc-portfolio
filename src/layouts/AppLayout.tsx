import Nav from '../components/Nav.tsx'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <>
    <header>
      <div className="relative font-semibold font-stretch-expanded text-white py-10 mt-3 bg-black text-6xl">
        Nathan Cheung
      </div>
      <Nav /> 
    </header>
      
      <Outlet />
    </>
  );
}
export default AppLayout;
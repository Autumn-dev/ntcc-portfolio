import { Outlet } from 'react-router-dom'
import MenuButton from '../components/MenuButton';

function AppLayout() {
  return (
    <>
      <MenuButton />
      <Outlet />
    </>
  );
}
export default AppLayout;
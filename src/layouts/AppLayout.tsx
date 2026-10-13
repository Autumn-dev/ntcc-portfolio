import { Outlet } from "react-router-dom";
import MenuButton from "../components/MenuButton";
import NavBar from "../components/NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <div className="md:hidden">
        <MenuButton />
      </div>
      <Outlet />
    </>
  );
}
export default AppLayout;

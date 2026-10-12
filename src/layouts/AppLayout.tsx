import { Outlet } from 'react-router-dom'
import MenuButton from '../components/MenuButton';

function AppLayout() {
  return (
    <>
      <title>Portfolio site</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Portfolio site for Nathan, by Nathan" />
      <meta name="keywords" content="portfolio, Nathan Cheung, web development, projects" />
      <meta name="author" content="Nathan Cheung" />
      
      <MenuButton />
      
      <Outlet />
    </>
  );
}
export default AppLayout;
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx'
import AppLayout from './layouts/AppLayout.tsx'
import './App.css'

function App() {
  return(
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={"<AboutPage />"} />
          <Route path="contact" element={"<ContactPage />"} />
        </Route>  
      </Routes>
  );
}

export default App

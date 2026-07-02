import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar.jsx'
import Navbar from '../components/Navbar/Navbar.jsx'
import './MainLayout.css'

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-layout__content">
        <Navbar />
        <main className="main-layout__page">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout

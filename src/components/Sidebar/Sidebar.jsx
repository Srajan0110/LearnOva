import { NavLink } from 'react-router-dom'
import './Sidebar.css'

const links = [
  { to: '/', label: 'Dashboard', icon: '🏠' },
  { to: '/courses', label: 'Courses', icon: '📚' },
  { to: '/students', label: 'Students', icon: '🧑‍🎓' },
  { to: '/my-learning', label: 'My Learning', icon: '🎯' },
  { to: '/assignments', label: 'Assignments', icon: '📝' },
  { to: '/quizzes', label: 'Quizzes', icon: '❓' },
  { to: '/live-classes', label: 'Live Classes', icon: '🎥' },
  { to: '/calendar', label: 'Calendar', icon: '📅' },
  { to: '/messages', label: 'Messages', icon: '💬' },
  { to: '/notes', label: 'Notes', icon: '🗒️' },
  { to: '/certificates', label: 'Certificates', icon: '🎓' },
]

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <span className="sidebar__brand-mark">LO</span>
        <span className="sidebar__brand-name">LearnOva</span>
      </div>

      <nav className="sidebar__nav">
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  'sidebar__link' + (isActive ? ' sidebar__link--active' : '')
                }
              >
                <span className="sidebar__link-icon">{link.icon}</span>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">
        <NavLink to="/profile" className="sidebar__link">
          <span className="sidebar__link-icon">👤</span>
          Profile
        </NavLink>
        <NavLink to="/settings" className="sidebar__link">
          <span className="sidebar__link-icon">⚙️</span>
          Settings
        </NavLink>
      </div>
    </aside>
  )
}

export default Sidebar

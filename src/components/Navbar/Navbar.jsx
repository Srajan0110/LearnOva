import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'

const notifications = [
  { id: 1, text: 'Your "Binary Search Tree" assignment is due in 3 days.' },
  { id: 2, text: 'Priya Sharma sent you a new message.' },
  { id: 3, text: 'You scored 95% on the Marketing Channels Quiz.' },
]

function Navbar({ userName = 'Alex Morgan' }) {
  const [query, setQuery] = useState('')
  const [showNotifications, setShowNotifications] = useState(false)
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    navigate(`/courses?search=${encodeURIComponent(query.trim())}`)
  }

  return (
    <header className="navbar">
      <form className="navbar__search" onSubmit={handleSearch}>
        <input
          type="search"
          placeholder="Search courses, assignments, people..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>

      <div className="navbar__actions">
        <div className="navbar__notifications">
          <button
            className="navbar__icon-btn"
            aria-label="Notifications"
            onClick={() => setShowNotifications((v) => !v)}
          >
            🔔
            <span className="navbar__badge">{notifications.length}</span>
          </button>

          {showNotifications && (
            <div className="navbar__dropdown">
              {notifications.map((n) => (
                <div key={n.id} className="navbar__dropdown-item">
                  {n.text}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="navbar__profile">
          <div className="navbar__avatar">{userName.charAt(0)}</div>
          <span className="navbar__name">{userName}</span>
        </div>
      </div>
    </header>
  )
}

export default Navbar

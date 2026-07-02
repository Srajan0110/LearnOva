import { useState } from 'react'
import './Settings.css'

function Settings() {
  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    liveClassReminders: true,
    darkMode: false,
  })

  const toggle = (key) => {
    setPreferences({ ...preferences, [key]: !preferences[key] })
  }

  const options = [
    { key: 'emailNotifications', label: 'Email notifications', desc: 'Get emailed about new messages and grades.' },
    { key: 'liveClassReminders', label: 'Live class reminders', desc: 'Receive a reminder 15 minutes before class starts.' },
    { key: 'darkMode', label: 'Dark mode', desc: 'Switch the interface to a darker color theme.' },
  ]

  return (
    <div className="page settings-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Preferences</span>
          <h1>Settings</h1>
        </div>
      </div>

      <div className="card p-4">
        {options.map((opt) => (
          <div className="settings-page__row" key={opt.key}>
            <div>
              <h3>{opt.label}</h3>
              <p className="text-muted mb-0">{opt.desc}</p>
            </div>
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                checked={preferences[opt.key]}
                onChange={() => toggle(opt.key)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Settings

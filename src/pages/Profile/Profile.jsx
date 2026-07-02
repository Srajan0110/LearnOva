import { useState } from 'react'
import { courses } from '../../data/mockData.js'
import './Profile.css'

function Profile() {
  const [form, setForm] = useState({
    name: 'Alex Morgan',
    email: 'alex.morgan@learnova.com',
    bio: 'Lifelong learner exploring design and web development.',
  })
  const [saved, setSaved] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setSaved(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSaved(true)
  }

  const enrolledCount = courses.filter((c) => c.progress > 0).length

  return (
    <div className="page profile-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Account</span>
          <h1>Profile</h1>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-4">
          <div className="card p-4 text-center">
            <div className="profile-page__avatar">{form.name.charAt(0)}</div>
            <h3>{form.name}</h3>
            <p className="text-muted">{form.email}</p>
            <p className="text-muted" style={{ fontSize: 13 }}>
              Enrolled in {enrolledCount} courses
            </p>
          </div>
        </div>

        <div className="col-12 col-md-8">
          <div className="card p-4">
            <h3 className="mb-3">Edit details</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Bio</label>
                <textarea
                  name="bio"
                  className="form-control"
                  rows={3}
                  value={form.bio}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">Save changes</button>
              {saved && <span className="text-success ms-3">Saved!</span>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

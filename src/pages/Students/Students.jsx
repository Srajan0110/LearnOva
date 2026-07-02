import { useState } from 'react'
import { students as initialStudents, courses } from '../../data/mockData.js'
import './Students.css'

let nextId = initialStudents.length + 1

function Students() {
  const [students, setStudents] = useState(initialStudents)
  const [courseFilter, setCourseFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({ name: '', email: '', course: courses[0].title })

  // filter() combines the course dropdown filter with the name/email search box
  const visibleStudents = students
    .filter((s) => courseFilter === 'All' || s.course === courseFilter)
    .filter((s) =>
      (s.name + s.email).toLowerCase().includes(search.toLowerCase())
    )

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAddStudent = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim()) return

    const newStudent = {
      id: `s${nextId++}`,
      name: form.name.trim(),
      email: form.email.trim(),
      course: form.course,
      progress: 0,
    }

    setStudents([newStudent, ...students])
    setForm({ name: '', email: '', course: courses[0].title })
  }

  const handleRemoveStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id))
  }

  return (
    <div className="page students-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Students</span>
          <h1>All Students</h1>
        </div>
      </div>

      <div className="container-fluid px-0">
        <div className="row g-4">
          {/* Add Student form */}
          <div className="col-12 col-lg-4">
            <div className="card p-4 students-page__form-card">
              <h3 className="mb-3">Add Student</h3>
              <form onSubmit={handleAddStudent}>
                <div className="mb-3">
                  <label className="form-label">Full name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Jordan Blake"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="jordan.blake@learnova.com"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Course</label>
                  <select
                    name="course"
                    className="form-select"
                    value={form.course}
                    onChange={handleFormChange}
                  >
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Add Student
                </button>
              </form>
            </div>
          </div>

          {/* Student list */}
          <div className="col-12 col-lg-8">
            <div className="card p-4">
              <div className="row g-2 mb-3">
                <div className="col-12 col-sm-7">
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search by name or email..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-5">
                  <select
                    className="form-select"
                    value={courseFilter}
                    onChange={(e) => setCourseFilter(e.target.value)}
                  >
                    <option value="All">All courses</option>
                    {courses.map((c) => (
                      <option key={c.id} value={c.title}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="table-responsive">
                <table className="table align-middle students-page__table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Course</th>
                      <th>Progress</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleStudents.map((s) => (
                      <tr key={s.id}>
                        <td>
                          <div className="students-page__avatar">{s.name.charAt(0)}</div>
                          {s.name}
                        </td>
                        <td className="text-muted">{s.email}</td>
                        <td>{s.course}</td>
                        <td style={{ minWidth: 140 }}>
                          <div className="students-page__progress-track">
                            <div
                              className="students-page__progress-fill"
                              style={{ width: `${s.progress}%` }}
                            />
                          </div>
                          <span className="text-muted" style={{ fontSize: 12 }}>{s.progress}%</span>
                        </td>
                        <td>
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => handleRemoveStudent(s.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}

                    {visibleStudents.length === 0 && (
                      <tr>
                        <td colSpan={5} className="text-center text-muted py-4">
                          No students match this search or filter.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Students

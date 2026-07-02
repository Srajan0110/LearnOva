import { useState } from 'react'
import { assignments } from '../../data/mockData.js'
import './Assignment.css'

const statuses = ['All', 'Pending', 'Submitted', 'Late']

const badgeClass = {
  Pending: 'badge text-bg-warning',
  Submitted: 'badge text-bg-success',
  Late: 'badge text-bg-danger',
}

function Assignment() {
  const [statusFilter, setStatusFilter] = useState('All')

  const visible = assignments.filter(
    (a) => statusFilter === 'All' || a.status === statusFilter
  )

  return (
    <div className="page assignment-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Coursework</span>
          <h1>Assignments</h1>
        </div>
      </div>

      <div className="assignment-page__filters">
        {statuses.map((s) => (
          <button
            key={s}
            className={
              'assignment-page__filter-btn' +
              (statusFilter === s ? ' assignment-page__filter-btn--active' : '')
            }
            onClick={() => setStatusFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="card">
        <table className="table align-middle mb-0">
          <thead>
            <tr>
              <th>Assignment</th>
              <th>Course</th>
              <th>Due date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td className="text-muted">{a.course}</td>
                <td className="text-muted">{a.dueDate}</td>
                <td>
                  <span className={badgeClass[a.status]}>{a.status}</span>
                </td>
              </tr>
            ))}

            {visible.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-muted py-4">
                  No {statusFilter.toLowerCase()} assignments.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Assignment

import { notes } from '../../data/mockData.js'
import './Notes.css'

function Notes() {
  return (
    <div className="page notes-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Your notebook</span>
          <h1>Notes</h1>
        </div>
      </div>

      <div className="row g-4">
        {notes.map((n) => (
          <div className="col-12 col-md-6" key={n.id}>
            <div className="card p-4 notes-page__card">
              <h3>{n.title}</h3>
              <p className="text-muted mb-1">{n.course}</p>
              <span className="text-muted" style={{ fontSize: 12 }}>
                Updated {n.updated}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Notes

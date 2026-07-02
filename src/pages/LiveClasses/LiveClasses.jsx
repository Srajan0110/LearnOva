import { liveClasses } from '../../data/mockData.js'
import './LiveClasses.css'

function LiveClasses() {
  const upcoming = liveClasses.filter((l) => l.status === 'Upcoming')
  const completed = liveClasses.filter((l) => l.status === 'Completed')

  return (
    <div className="page live-classes-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Live Sessions</span>
          <h1>Live Classes</h1>
        </div>
      </div>

      <h2 className="mb-3">Upcoming</h2>
      <div className="row g-4 mb-5">
        {upcoming.map((l) => (
          <div className="col-12 col-md-6" key={l.id}>
            <div className="card p-4 live-classes-page__card">
              <h3>{l.title}</h3>
              <p className="text-muted mb-1">{l.course}</p>
              <p className="text-muted mb-3">
                {l.instructor} • {l.date} at {l.time}
              </p>
              <button className="btn btn-primary btn-sm">Join class</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mb-3">Completed</h2>
      <div className="row g-4">
        {completed.map((l) => (
          <div className="col-12 col-md-6" key={l.id}>
            <div className="card p-4 live-classes-page__card live-classes-page__card--done">
              <h3>{l.title}</h3>
              <p className="text-muted mb-1">{l.course}</p>
              <p className="text-muted mb-3">
                {l.instructor} • {l.date} at {l.time}
              </p>
              <button className="btn btn-outline-secondary btn-sm">Watch recording</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LiveClasses

import CalendarWidget from '../../components/Calendar/Calendar.jsx'
import { assignments, liveClasses } from '../../data/mockData.js'
import './Calendar.css'

// Combine assignment due dates and live class dates into one event feed
const events = [
  ...assignments.map((a) => ({ date: a.dueDate, label: `${a.title} due`, type: 'Assignment' })),
  ...liveClasses.map((l) => ({ date: l.date, label: l.title, type: 'Live class' })),
].sort((a, b) => new Date(a.date) - new Date(b.date))

// Build a { day: true } map for the current month so the calendar grid can mark event days
const eventDays = events.reduce((acc, e) => {
  const day = new Date(e.date).getDate()
  acc[day] = true
  return acc
}, {})

function CalendarPage() {
  return (
    <div className="page calendar-page">
      <div className="page-header">
        <div>
          <span className="eyebrow">Schedule</span>
          <h1>Calendar</h1>
        </div>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <CalendarWidget events={eventDays} />
        </div>

        <div className="col-12 col-lg-7">
          <div className="card p-4">
            <h3 className="mb-3">Upcoming</h3>
            <ul className="calendar-page__list">
              {events.map((e, idx) => (
                <li key={idx}>
                  <span className={`badge text-bg-${e.type === 'Assignment' ? 'warning' : 'info'}`}>
                    {e.type}
                  </span>
                  <span className="calendar-page__list-label">{e.label}</span>
                  <span className="text-muted">{e.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage

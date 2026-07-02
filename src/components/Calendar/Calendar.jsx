import { useState } from 'react'
import './Calendar.css'

const WEEKDAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

function Calendar({ events = {} }) {
  const [date, setDate] = useState(new Date())

  const year = date.getFullYear()
  const month = date.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  const changeMonth = (delta) => {
    setDate(new Date(year, month + delta, 1))
  }

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button onClick={() => changeMonth(-1)} aria-label="Previous month">‹</button>
        <h3>{date.toLocaleString('default', { month: 'long' })} {year}</h3>
        <button onClick={() => changeMonth(1)} aria-label="Next month">›</button>
      </div>

      <div className="calendar__weekdays">
        {WEEKDAYS.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>

      <div className="calendar__grid">
        {cells.map((day, idx) => (
          <div
            key={idx}
            className={
              'calendar__cell' + (day && events[day] ? ' calendar__cell--event' : '')
            }
          >
            {day || ''}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar

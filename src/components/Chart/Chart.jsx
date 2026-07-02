import './Chart.css'

function Chart({
  data = [
    { label: 'Mon', value: 40 },
    { label: 'Tue', value: 65 },
    { label: 'Wed', value: 50 },
    { label: 'Thu', value: 80 },
    { label: 'Fri', value: 60 },
    { label: 'Sat', value: 30 },
    { label: 'Sun', value: 45 },
  ],
  title = 'Weekly study hours',
}) {
  const max = Math.max(...data.map((d) => d.value), 1)

  return (
    <div className="chart">
      <h3>{title}</h3>
      <div className="chart__bars">
        {data.map((d) => (
          <div className="chart__bar-wrap" key={d.label}>
            <div
              className="chart__bar"
              style={{ height: `${(d.value / max) * 100}%` }}
              title={`${d.label}: ${d.value}`}
            />
            <span className="chart__bar-label">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Chart

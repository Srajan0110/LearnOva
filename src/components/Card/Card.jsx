import './Card.css'

function Card({ title, value, trend, icon, children }) {
  if (children) {
    return <div className="card">{children}</div>
  }

  return (
    <div className="card card--stat">
      <div className="card__icon">{icon}</div>
      <div className="card__body">
        <span className="eyebrow">{title}</span>
        <h2>{value}</h2>
        {trend && <span className="card__trend">{trend}</span>}
      </div>
    </div>
  )
}

export default Card

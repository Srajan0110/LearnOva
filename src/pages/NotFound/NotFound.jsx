import { Link } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p className="text-muted">This page wandered off the syllabus.</p>
      <Link to="/" className="not-found__link">Back to dashboard</Link>
    </div>
  )
}

export default NotFound
